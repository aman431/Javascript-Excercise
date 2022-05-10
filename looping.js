let array = [21, 22, 34, 11, 10, 8, 7, 5];

// 1. For loop
// for (let i = 0; i < array.length; i++) {
//   console.log("array", array[i]);
// }

// 2. while loops
// let i = 0;
// while (i < array.length) {
//   console.log("All elements  in while loop", array[i]);
// }

// 3. For in loops:-
// let object = {
//   firstname: "Aman",
//   lastname: "Rathod",
// };

// for (let i in array) {
//   console.log("Check for in loop", array[i]);
// }

// 4. for of loops:-
// for (let i of array) {
//   console.log("check i", i);
// }

// ------------> Array Methods of looping --------------------->

// 5. for each
// array.forEach(function (elements, index) {
//   console.log("elements " + elements + "index" + index);
// });

// 6. maping
// array.map((item) => {
//   console.log("items", item);
// });

// 7. filter
// let filteritem = array.filter((item) => item > 20);
// console.log("check filteritem", filteritem);

// 8. find Index
// console.log(array.findIndex((item) => item > 33));

// 9. some
// console.log(array.some((item) => item > 200));

// 10. every
// console.log(array.every((item) => item > 10));

// 11. reduce :-
let initialvalue = 0;
let sum = array.reduce((acc, item) => acc + item, initialvalue);
console.log(sum);
