const API_URL = "https://www.swapi.tech/api";

export function fetchData(fetchParam) {
  return fetch(`${API_URL}/${fetchParam}`)
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
