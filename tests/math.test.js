const math = require("../math");

test("Add - 2 + 3 igual a 5", () => {
  expect(math.add(2, 3)).toBe(5);
});

test("Add - 3 + 7 igual a 10", () => {
  expect(math.add(3, 7)).toBe(10);
});

test("Add - 1.1 + 3 igual a 4.1", () => {
  expect(math.add(1.1, 3)).toBe(4.1);
});

test("Add - 1.4 + 1.45 igual a 2.85", () => {
  expect(math.add(1.4, 1.45)).toBe(2.85);
});
