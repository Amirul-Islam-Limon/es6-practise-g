const age1 = [11,22,33,44,55,66];
const age2 = [77,88,99,00];
const totalAge = [...age1,...age2];
console.log(totalAge);

const maxValue = Math.max(...age1);
console.log(maxValue);