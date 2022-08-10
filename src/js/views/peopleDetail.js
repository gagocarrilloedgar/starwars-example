import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchData } from "../utils/fetchData";

export const NewPeopleDetail = () => {
  const { id } = useParams();

  const [person, setPerson] = useState([]);

  useEffect(() => {
    if (id) fetchData(`people/${id}`).then((res) => setPerson(res.result));
  }, [id]);

  if (person.length === 0) return <div>loading ...</div>;

  return (
    <div>
      <h1>{person.properties.name}</h1>
      <h4>{person.properties.birth_year}</h4>
    </div>
  );
};
