import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchData } from "../utils/fetchData";

export const DetailPage = ({ path }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (id) fetchData(`${path}/${id}`).then((res) => setData(res.result));
  }, [id]);

  if (data.length === 0) return <div>loading ...</div>;

  return (
    <div>
      <h1>{data.properties.name}</h1>
      <h4>{data.properties.birth_year}</h4>
    </div>
  );
};
