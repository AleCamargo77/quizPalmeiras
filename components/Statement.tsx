import styles from "../styles/statement.module.css";

interface StatementProps {
  text: string;
}

export default function Statement(props: StatementProps) {
  return (
    <div className={styles.statement}>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
}
