
function average(numbers) {
  const numbers = numbers.filter(n => !Number.isNaN(n));
  return numbers.reduce((p, c) => p + c, 0) / numbers.length;
}

module.exports = {average};
