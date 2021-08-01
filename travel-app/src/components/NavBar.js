import React from "react";

export default function NavBar() {
  return (
    <div className="navbar-menu">
      <ul>
        <li>
          <a href="#weather" className="menu-item">
            WEATHER
          </a>
        </li>
        <li>
          <a href="#destinations" className="menu-item">
            DESTINATIONS
          </a>
        </li>
        <li>
          <a href="#trip-form" className="menu-item">
            GET A QUOTE
          </a>
        </li>
      </ul>
    </div>
  );
}
