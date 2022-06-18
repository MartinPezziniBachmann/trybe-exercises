const service = require("./service");

test("testando a função randomNumber", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
});
