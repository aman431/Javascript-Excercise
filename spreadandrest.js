function sum(x, y, z) {
  return x + y + z;
}

let n = [1, 2, 3, 4];
// console.log(sum(...n)); // spread operator

let number = [1, 2, 3, 4];
let newnumber = 14;
number = [...number, newnumber];
console.log(number);
