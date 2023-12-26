for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i+"-FizzBuzz");
  } else if (i % 5 === 0) {
    console.log(i+"-Buzz");
    continue;
  } else if (i % 3 === 0) {
    console.log(i+"-Fizz");
    continue;
  }else {
    console.log(i);
  }
}
