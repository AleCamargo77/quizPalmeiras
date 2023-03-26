import styles from "../../styles/results.module.css";
import { useRouter } from "next/router";
import Statistic from "../../components/Statistic";
import Button from "../../components/Button";

export default function Result() {
  const router = useRouter();

  const total = +router.query.total;
  const valid = +router.query.certas;
  const percent = Math.round((valid / total) * 100);

  return (
    <div className={styles.results}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Statistic text="Perguntas" valor={total} />
        <Statistic text="Certas" valor={valid} colorBack="#61df70" />
        <Statistic
          text="Percentual"
          valor={`${percent}%`}
          colorBack="#0c5a17"
        />
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  );
}
