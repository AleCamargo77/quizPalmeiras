import QuestionModel from "model/question";
import styles from "../styles/question.module.css";
import Response from "./Response";
import Statement from "./Statement";
import Timer from "./Timer";

const letters = [
  { valor: "A", cor: "#F2C866" },
  { valor: "B", cor: "#F266BA" },
  { valor: "C", cor: "#85D4F2" },
  { valor: "D", cor: "#BCE596" },
];

interface QuestionProps {
  valor: QuestionModel;
  timeResponse?: number;
  onResponse: (index: number) => void;
  timeOut: () => void;
}

export default function Question(props: QuestionProps) {
  const question = props.valor;

  function renderResponses() {
    return question.respostas.map((response, i) => {
      return (
        <Response
          key={`${question.id}-${i}`}
          valor={response}
          indice={i}
          letra={letters[i].valor}
          corFundoLetra={letters[i].cor}
          onResponse={props.onResponse}
        />
      );
    });
  }

  return (
    <div className={styles.question}>
      <Statement text={question.enunciado} />
      <Timer
        key={question.id}
        duration={props.timeResponse ?? 10}
        timeOut={props.timeOut}
      />
      {renderResponses()}
    </div>
  );
}
