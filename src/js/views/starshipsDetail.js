import React, { useEffect, useMemo, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchData } from "../utils/fetchData";

export const StarshipsDetail = () => {
  const { id } = useParams();

  const [starship, setStarship] = useState({});
  const [pilotsIds, setPilotIds] = useState([]);

  const isStartshipEmpty = useMemo(
    () => Object.keys(starship).length === 0,
    [starship]
  );

  useEffect(() => {
    if (id) fetchData(`starships/${id}`).then((res) => setStarship(res.result));
  }, [id]);

  useEffect(() => {
    if (!isStartshipEmpty) {
      const pilots = starship.properties.pilots;
      const uids = pilots.map((url) => url.split("/").pop());
      setPilotIds(uids);
    }
  }, [isStartshipEmpty]);

  if (isStartshipEmpty || pilotsIds.length === 0) return <div>loading ...</div>;

  return (
    <div>
      <h1>{starship.properties.name}</h1>
      {pilotsIds.map((pilotId) => (
        <PilotDetail key={pilotId} id={pilotId} />
      ))}
    </div>
  );
};

const PilotDetail = ({ id }) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    if (id) fetchData(`people/${id}`).then((res) => setPerson(res.result));
  }, [id]);

  if (person.length === 0) return <div>loading ...</div>;

  return <h1>{person.properties.name}</h1>;
};
