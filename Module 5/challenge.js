//MODULE  5

// Odd even checker
let inputChecker = function (value) {
  if (value % 2 === 0) return ("The number given is even");
  else return ("The number given is odd");
};

console.log(inputChecker(41));
console.log(inputChecker(22));

// Day index checker

let dayIndex = 2;
let day = "";

function weekName(index) {
  switch (index) {
    case 1:
      return "Sunday";

    case 2:
      return "Monday";

    case 3:
      return "Turesday";

    case 4:
      return "Wednesday";

    case 5:
      return "Thursday";

    case 6:
      return "Friday";

    case 7:
      return "Saturday";

    default:
      break;
  }
}

console.log(weekName(dayIndex));

// greatestNumberChecker
function greatestNumber(a, b) {
  if (a > b) return a;
  else return b;
}

console.log(greatestNumber(2, 3));
console.log(greatestNumber(4, 3));