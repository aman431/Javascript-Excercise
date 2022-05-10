const countvariable = (allcount) =>
  (function (count) {
    let totalcount = count; // this variable is private it's not accessible outside function
    let checknegativecount = function () {
      // function randomly call
      return "Totalcount is negative";
    };
    checknegativecount(); // call function
    return {
      // reduce number subtraction from total no.
      reducecount: function (count) {
        if (totalcount >= count) {
          totalcount -= count;
          return totalcount;
        } else {
          return "count should get negative";
        }
      },
    };
  })(allcount);

let firstuser = countvariable("200"); // your count will get negative
console.log(firstuser.totalcount); // undefined you cann't access inside function of the IIFE
console.log(firstuser.reducecount(30)); // reduce count with 30
console.log(firstuser.reducecount(70)); // reduce count with 70
console.log(firstuser.checknegativecount()); // undefined this function is private
