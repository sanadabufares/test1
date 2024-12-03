function PrimeNumber(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrimeNumber(maxPrime) {
  for (let num = 2; num < maxPrime; num++) {
    if (PrimeNumber(num)) {
      console.log(num);
    }
  }
}

printPrimeNumber(237);
