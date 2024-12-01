const num = 123;

const result = Number(num % 3 == 0) + (num % 5 == 0) + (num % 2 == 0);
console.log(result);
