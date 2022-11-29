
const sum = (n1, n2) => n1 + n2;

const getDailyFortune = () => "Run 5 miles today!"

test("Should return the sum of two numbers", () => {
  // expect(0).toBeTruthy()

  // expect("Hello World").toContain("Bye")

  // let fruits = ["apple", "guava", "oranges"];
  // expect(fruits).not.toContain("banana")     

  // expect("Good bye").toMatch(/BYE/i);      // ?

  // expect(sum(2, 4)).toEqual(6);

  expect(getDailyFortune()).toMatch(/miles/i)

})