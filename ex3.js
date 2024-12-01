const arr = [2, 1, 0, 0, 5];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  count += arr[i] === 0 ? 1 : 0;
}

console.log(count);
