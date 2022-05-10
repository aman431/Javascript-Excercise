let arr = [21, 22, 4, 5, 6, 1, "hello"];

// 1. array index
console.log("index", arr[2]);

// 2. push
console.log("push", arr.push(50), arr);

// 3. pop
console.log("pop", arr.pop(), arr);

// 4. shift
console.log("shift", arr.shift(), arr);

// 5. unshift
console.log("unshift", arr.unshift(21), arr);

// 6. splice
// console.log("splice", arr.splice(2, 4), arr);

// 7. splits
console.log("split", arr.slice(0, 3));

// 8. reverse
console.log("reverse", arr.reverse());

// 9. length
console.log("length", arr.length);

// 10. concat
console.log("concat", arr.concat(121, 222));

// 11. join
console.log("join", arr.join(","));

// 12. index.Of
console.log("index of", arr.indexOf(21));

// 13. lastIndex.Of
console.log("index of", arr.lastIndexOf(21));

// 14. toString
console.log("to string", arr.toString());

// 15. sort()
console.log("Sort", arr.sort());
