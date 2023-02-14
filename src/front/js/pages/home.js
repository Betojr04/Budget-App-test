import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import Card from "../component/Card";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Income",
    description: "In depth view of all your income sources.",
  },
  {
    title: "Expenses",
    description: "In depth view of all your expenses.",
  },
  {
    title: "Savings",
    description: "In depth view of all your debt.",
  },
  {
    title: "Debt",
    description: "In depth view of all your savings.",
  },
];

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row row-cols-2 d-flex">
        <Card
          title={cardData[0].title}
          description={cardData[0].description}
          background="blue"
        />
        <Card
          title={cardData[1].title}
          description={cardData[1].description}
          background="green"
        />
      </div>
      <div className="row row-cols-2 d-flex">
        <Card
          title={cardData[2].title}
          description={cardData[2].description}
          background="orange"
        />
        <Card
          title={cardData[3].title}
          description={cardData[3].description}
          background="purple"
        />
      </div>
    </div>
  );
};
