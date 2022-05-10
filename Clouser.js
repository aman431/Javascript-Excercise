function User(name) {
  var displayName = function (gretting) {
    return `${gretting} ${name}`;
  };

  return displayName;
}

// var user = User("Don");
// console.log(user("Welcome"));
// console.log(user("Hello"));

// Emula    ting private method in Closure
var counter = (function () {
  var privatecounter = 0;

  // function name ...!
  function _changevalue(value) {
    privatecounter += value;
  }

  return {
    increment: function () {
      _changevalue(1);
    },

    decrement: function () {
      _changevalue(-1);
    },

    value: function () {
      return privatecounter;
    },
  };
})();

// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());

// let a = [2, 1, 3, 4, 5, 6, 7, 8];

// i = 5;
// for (i of a) {
//   if (i === 4) {
//     console.log("4 printing");
//     break;
//   }
//   console.log("check another one");
//   console.log("Check i", i);
// }
// if (1 in a) {
//   console.log("number is available");
// } else {
//   console.log("number is not available");
// }

/**
 * 1. For loop
 * normal for loop
 * for...in statement
 * for...of statement
 */
