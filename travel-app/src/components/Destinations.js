import React, { useEffect, useState } from "react";

export default function Destinations() {
  let [destination, setDestination] = useState([]);

  useEffect(async () => {
    const url = "https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c";
    const response = await fetch(url);
    const data = await response.json();
    setDestination(data.result);
  }, []);

  return (
    <div className="destinations-container">
      <div className="destinations-heading">
        <h3>Featured Destinations</h3>
      </div>
      <div className="destinations-body">
        {destination.map((item, index) => {
          return (
            <div className="destinations-cards" key={index}>
              <img src={item.imageUrl} />
              <p>{item.city}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
