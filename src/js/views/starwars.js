import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function fetchDataCallback() {
  return fetch("https://www.swapi.tech/api/people")
    .then((response) => {
      return response.json().then((response) => {
        return response;
      });
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });
}

function fetchPlanets() {
  return fetch("https://www.swapi.tech/api/planets")
    .then((response) => {
      return response.json().then((response) => {
        return response;
      });
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });
}

function fetchSpecificData(url) {
  return fetch(url)
    .then((response) => {
      return response.json().then((response) => {
        return response;
      });
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });
}

const StarWarsCard = ({ name, uid, openCharacterInfo, path }) => {
  return (
    <div className="card">
      <h5>{name}</h5>
      <img src="https://picsum.photos/200/300" width="200" />
      <Link to={`/${path}/${uid}`}>More info</Link>
      <button onClick={openCharacterInfo}></button>
    </div>
  );
};

const CardRows = ({ title, data, path }) => {
  return (
    <>
      <h1>{title}</h1>;
      {data.map((item) => (
        <StarWarsCard
          key={item.name}
          path={path}
          name={item.name}
          uid={item.uid}
          openCharacterInfo={() => alert(item.name)}
        />
      ))}
    </>
  );
};

export const StarWars = () => {
  const [people, setPeople] = useState(null);

  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    fetchDataCallback().then((peopleRes) => setPeople(peopleRes.results));
    fetchPlanets().then((planetsRes) => setPlanets(planetsRes.results));
  }, []);

  if (!people || !planets) return <div>Loading ...</div>;

  return (
    <div>
      <CardRows title={"People"} data={people} path="people" />
      <hr />
      <CardRows title="Planets" data={planets} path="planets" />
    </div>
  );
};

export const PeopleDetail = () => {
  const { id } = useParams();
  const [personData, setPersonData] = useState({});

  useEffect(() => {
    function fetchDataCallback() {
      return fetch(`https://www.swapi.tech/api/people/${id}`)
        .then((response) => {
          return response.json().then((response) => {
            return setPersonData(response.result);
          });
        })
        .catch((error) => {
          //error handling
          console.log(error);
        });
    }

    fetchDataCallback();
  }, [id]);

  console.log(personData);
  return null;
};

export const PlanetsDetails = () => {
  const { id } = useParams();
  const [personData, setPersonData] = useState({});

  useEffect(() => {
    function fetchDataCallback() {
      return fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then((response) => {
          return response.json().then((response) => {
            return setPersonData(response.result);
          });
        })
        .catch((error) => {
          //error handling
          console.log(error);
        });
    }

    fetchDataCallback();
  }, [id]);

  console.log(personData);
  return null;
};
