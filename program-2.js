function serious(a) {
  let result = [];

  for (let i = 1; i <= a; i++) {
    result.push(2 * i - 1);
  }
  return result.join(", ");
}

console.log(serious(1)); // 1
console.log(serious(3)); // 1,3,5
console.log(serious(5)); // 1,3,5 7 9
