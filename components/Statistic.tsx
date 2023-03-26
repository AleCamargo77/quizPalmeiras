import styles from "../styles/statistic.module.css";

interface StatisticsProps {
  valor: any;
  text: string;
  colorBack?: string;
  colorFont?: string;
}

export default function Statistic(props: StatisticsProps) {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: props.colorBack ?? "#087c39",
          color: props.colorFont ?? "#ccc",
        }}
      >
        {props.valor}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
