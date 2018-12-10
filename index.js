// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`)
  }
  return employees
}

function tailsNeverFails() {
  function coinFlip() {
    return Math.random() >= 0.5
  }

  let tailsAmount = 0

  while (coinFlip()) {
    tailsAmount++
  }

  return `You got ${tailsAmount} tails in a row!`;
}
