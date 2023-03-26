import styles from "../styles/quiz.module.css";
import QuestionModel from "model/question";
import Question from "./Question";
import Button from "./Button";

interface QuizProps {
  question: QuestionModel;
  lastQuestion: boolean;
  questionResponse: (question: QuestionModel) => void;
  nextStep: () => void;
}

export default function Quiz(props: QuizProps) {
  function responseProvided(index: number) {
    if (props.question.naoRespondida) {
      props.questionResponse(props.question.responseWith(index));
    }
  }

  return (
    <div className={styles.quiz}>
      {props.question ? (
        <Question
          valor={props.question}
          timeResponse={6}
          onResponse={responseProvided}
          timeOut={props.nextStep}
        />
      ) : (
        false
      )}
      <Button
        onClick={props.nextStep}
        text={props.lastQuestion ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
