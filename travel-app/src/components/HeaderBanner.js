import React, { useState, useEffect } from "react";

export default function HeaderBanner() {
  const calculateTimeLeft = () => {
    const targetDate = "08/08/2021 18:00:00";
    let difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  let [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="linear-color header-banner">
      <div>
        <h3 className="header-text">
          Book now to get exciting travel deals. Upto 40% off on credit card
          payments
        </h3>
        <h5 className="offer-text">
          Offer ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </h5>
      </div>
    </div>
  );
}
