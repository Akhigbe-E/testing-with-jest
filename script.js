const searchEngineDatabase = [
  "hello.com",
  "dog.com",
  "gooddog.com",
  "baddog.com",
  "flowers.com",
  "bye.com"
];

const searchDB = database => searchInput => {
  const matches = database.filter(website => website.includes(searchInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// const searchSearchEngineDB = searchDB(searchEngineDatabase);
// console.log(searchDB(searchEngineDatabase)("dog"));

module.exports = searchDB;
