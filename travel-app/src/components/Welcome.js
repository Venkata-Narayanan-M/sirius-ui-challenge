import React from "react";

export default function Welcome() {
  return (
    <div className="welcome-container col-12">
      <div className="welcome-image col-6">
        <img src=".\images\welcome-image.svg" />
      </div>
      <div className="welcome-text col-6">
        <h1>
          Life is short <br />
          and the world is wide!
        </h1>
        <p>
          Stay at the comfort of your homes and book a trip to travel after the
          post pandemic era
        </p>
        <button className="linear-color button-style" type="submit">
          PLAN A TRIP
        </button>
      </div>
    </div>
  );
}
