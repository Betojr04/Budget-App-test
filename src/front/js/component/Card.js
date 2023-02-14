import React from "react";

import "../../styles/card.css";

export const Card = (props) => {
  let background;

  switch (props.background) {
    case "blue":
      background = "linear-gradient(to right, #CCFFAA, #1EFB53)";
      break;
    case "green":
      background = "linear-gradient(to right, #ff2f78, #ff7582)";
      break;
    case "orange":
      background = "linear-gradient(to right, #ffd59a, #ffa726)";
      break;
    case "purple":
      background = "linear-gradient(to right, #b388ff, #7c4dff)";
      break;
    default:
      background = "linear-gradient(to right, #b2ff59, #00b20d)";
  }

  return (
    <div className="col-6 col-sm-6 col-md-6">
      <div className="card h-100" style={{ background }}>
        {/* <img src={props.imageUrl} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title text-light">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
