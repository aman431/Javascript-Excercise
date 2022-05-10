let x = 3;
let promises_result = new Promise(function (resolve, reject) {
  if (x === 2) {
    resolve(x); // callback function after resolving...!
  } else {
    reject(new Error(`x is not equal to ${x}`)); // callback function after reject...!
  }
});

promises_result
  .then((data) => console.log("X is equal to", data))
  .catch((error) => console.log(error));
