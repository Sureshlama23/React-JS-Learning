import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
