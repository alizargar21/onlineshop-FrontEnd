import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={
        isDanger
          ? "center flex-col w-[45px] sm:w-auto sm:text-[10px] text-[14px] text-red-600 p-1 m-1 dark:bg-black/40 bg-white/30  rounded-md"
          : "center flex-col w-[45px] sm:w-auto sm:text-[10px] text-[14px] p-1 bg-white/50  m-1 rounded-md text-primary dark:bg-black/40 dark:text-primary-dark"
      }
    >
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div  >
      <a href="" rel="" className="center mb-10">
        <DateTimeDisplay
          value={days}
          type={"Days"}
          className=""
          isDanger={days <= 1}
        />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Secs"} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
      
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
