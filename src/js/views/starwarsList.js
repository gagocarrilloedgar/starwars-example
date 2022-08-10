// Fetch people, planets, starships
import React from "react";
import { useEffect, useState } from "react";
import { RowComponent } from "../component/RowComonent";
import { fetchData } from "../utils/fetchData";

const checkIfEmpty = (arr) => arr.length > 0;

const filterByName = (arr, input) =>
  arr.filter((item) => {
    console.log(input);
    return item.name.includes(input);
  });

export const StarWarsList = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [peopleInit, setPeopleInit] = useState([]);

  const restoreState = () => {
    setPeople(peopleInit);
  };

  const onSearchChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") return restoreState();

    const filteredPeople = filterByName(people, searchValue);
    const filteredPlanets = filterByName(planets, searchValue);
    const filteredStarships = filterByName(starships, searchValue);

    setPeople(filteredPeople);
    setPlanets(filteredPlanets);
    setStarships(filteredStarships);
  };

  useEffect(() => {
    const fetchAll = async () => {
      const [planetsData, peopleData, starshipsData] = await Promise.all([
        fetchData("planets"),
        fetchData("people"),
        fetchData("starships"),
      ]);

      setPeople(peopleData.results);
      setPeopleInit(peopleData.results);

      setPlanets(planetsData.results);
      setStarships(starshipsData.results);
    };

    fetchAll();
  }, []);

  if (!checkIfEmpty(people) || !checkIfEmpty(planets))
    return <div>loading....</div>;

  return (
    <div>
      <input onChange={onSearchChange} />;
      <RowComponent title="People list" data={people} path="people" />
      <hr />
      <RowComponent title="Planets list" data={planets} path="planets" />
      <hr />
      <RowComponent title="Starships list" data={starships} path="starships" />
    </div>
  );
};
