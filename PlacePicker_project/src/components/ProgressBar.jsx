import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("TIMER TICK");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
      console.log("TIMER CLEARED");
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
