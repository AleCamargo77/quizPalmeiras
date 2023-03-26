import styles from "../styles/response.module.css";
import ResponseModel from "model/response";

interface ReponseProps {
  valor: ResponseModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  onResponse: (index: number) => void;
}

export default function Response(props: ReponseProps) {
  const response = props.valor;
  const responseReveal = response.revelada ? styles.responseReveal : "";
  return (
    <div
      className={styles.response}
      onClick={() => props.onResponse(props.indice)}
    >
      <div className={`${responseReveal} ${styles.contentResponse}`}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: props.corFundoLetra }}
          >
            {props.letra}
          </div>
          <div className={styles.value}>{response.valor}</div>
        </div>

        <div className={styles.back}>
          {response.certa ? (
            <div className={styles.valid}>
              <div>A resposta certa é...</div>
              <div className={styles.content}>{response.valor}</div>
            </div>
          ) : (
            <div className={styles.notValid}>
              <div>A resposta informada está errada...</div>
              <div className={styles.content}>{response.valor}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
