import React from "react";
import { Link } from "react-router-dom";

export const StarWarsCard = ({ name, uid, path }) => {
  return (
    <div className="card">
      <h5>{name}</h5>
      <img src="https://picsum.photos/200/300" width="200" />
      <Link to={`/starwars-home/${path}/${uid}`}>More info</Link>
    </div>
  );
};
