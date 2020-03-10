const searchDB = require("./script");

const dbMock = [
  "cat.com",
  "disney.com",
  "catwalk.com",
  "catfood.com",
  "catfish.com",
  "fish.com"
];

describe("searchDB", () => {
  const searchMock = searchDB(dbMock);
  it("searches the given DB and returns first 3 results", () => {
    expect(searchMock("cat")).toEqual([
      "cat.com",
      "catwalk.com",
      "catfood.com"
    ]);
    expect(searchMock("parrot")).toEqual([]);
  });

  it("works with undefined and null searches", () => {
    expect(searchMock(undefined)).toEqual([]);
    expect(searchMock(null)).toEqual([]);
  });
});
