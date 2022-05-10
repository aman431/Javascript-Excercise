let str = "Hello world";

// 1. string.length
console.log("length", str.length);

// 2. string.charAt(index)
console.log("Specify position", str.charAt(1));

// 3. string[index]
console.log("Index", str[4]);

// 4. string.toLowerCase()
console.log("lowercases", str.toLowerCase());

// 5. string.ToUpperCase()
console.log("Uppercases", str.toUpperCase());

// 6. string.split(' ')
console.log({
  "with space": str.split(" "),
  "without space": str.split(""),
});

// 7. string.includes("hello")
console.log("include", str.includes("Hello"));

// 8. string.replace("substr", "newsubstr")
console.log("Change String", str.replace("Hello", "welcome"));

//9. string.indexOf('searchvalue')
console.log("Index of", str.indexOf("o"));

//10. string.lastIndexOf('searchvalue');
console.log("Last Index", str.lastIndexOf("D"));
