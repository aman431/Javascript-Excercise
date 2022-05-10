function displaysum(result) {
  console.log("show result", result);
}

function sum(n1, n2, callback) {
  let result = n1 + n2;
  return callback(result);
}

sum(21, 20, displaysum);
