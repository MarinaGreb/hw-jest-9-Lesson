const calculateBonus = require("./calculateBonus.js"); //импорт
describe("Прямая проверка", () => {
  it("Проверка выполнения условия, если сумма < 50", () => {
    expect(calculateBonus(10, 5)).toBeLessThan(50);
  });
  it("Проверка выполнения условия, если сумма > 50", () => {
    expect(calculateBonus(25, 60)).toBe(50);
  });
  // it("Проверка выполнения условия, если сумма = 50", () => {
  //   expect(calculateBonus(25, 25)).toBe(50);
  // });
  // it("Проверка выполнения условия, если сумма < 0", () => {
  //   expect(calculateBonus(-20, 5)).toBeLessThan(0);
  // });
  // it("Проверка выполнения условия, если сумма = 0", () => {
  //   expect(calculateBonus(-5, 5)).toBe(0);
  // });
  // it("Проверка выполнения условия, если сумма отицательное число", () => {
  //   expect(calculateBonus(-30, -3)).toBeLessThan(50);
  // });
});

// describe("Проверка граничных значений для нецелых чисел ", () => {
//   it("Сумма < 50", () => {
//     expect(calculateBonus(49, 0.55)).toBeLessThan(50);
//   });
//   it("Сумма > 50", () => {
//     expect(calculateBonus(49.55, 0.67)).toBeGreaterThanOrEqual(50);
//   });
// });
