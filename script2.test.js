const fetch = require("node-fetch");
const { getPeople, getPeoplePromise } = require("./script2");

describe("Swapi API", () => {
  //   it("calls swapi to get people", () => {
  //     expect.assertions(2);
  //     return getPeople(fetch).then(data => {
  //       expect(data.count).toBe(87);
  //       expect(data.results.length).toBeGreaterThan(5);
  //     });
  //   });

  it("return counts and results", () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({ count: 87, results: [1, 2, 3, 4, 5, 6] })
      })
    );
    expect.assertions(4);
    return getPeople(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toHaveBeenCalledWith("https://swapi.co/api/people");
      expect(data.count).toBe(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
