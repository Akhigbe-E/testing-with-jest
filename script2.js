const fetch = require("node-fetch");

const getPeoplePromise = fetch => {
  return fetch("https://swapi.co/api/people")
    .then(res => res.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      };
    });
};

const getPeople = async fetch => {
  const fetchedPeople = await fetch("https://swapi.co/api/people");
  const { count, results } = await fetchedPeople.json();
  return { count, results };
};

module.exports = {
  getPeople,
  getPeoplePromise
};
