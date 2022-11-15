const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;
  //выполнение скрипта приостанавливается, показывается место остановки,
  //все объявленные переменные и их значения на момент остановки отображаются слева
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; //значение в переменной bonus обновилось, остальные переменные остались прежними
  return bonus;
};

// calculateBonus(5, 7)//необходимо вызвать функцию для демонстарации выражения debugger,
// //иначе debugger не срабатывает т.к. расположен в функции
// calculateBonus(45, 7)

// console.log(calculateBonus(-10, 7));
// console.log(calculateBonus(45, 7));

module.exports = calculateBonus;
