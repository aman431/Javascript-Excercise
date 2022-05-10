function calculateArea(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

console.log(calculateArea(21)(20)(10));
