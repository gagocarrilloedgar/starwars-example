import React from "react";

import { StarWarsCard } from "./StartWardsCard";

export const RowComponent = ({ title, data, path }) => {
  return (
    <>
      <h1>{title}</h1>;
      <hr />
      {data.map((item) => (
        <StarWarsCard
          key={item.name}
          path={path}
          name={item.name}
          uid={item.uid}
        />
      ))}
    </>
  );
};
