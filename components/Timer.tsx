import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Timer.module.css";

interface TimerProps {
  key: any;
  duration: number;
  timeOut: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeOut}
        colors="#BCE596"
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
