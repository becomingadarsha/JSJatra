// MODEULE 4

//Voting eligibility checker
let age = 10;
const ELIGIBLE_VOTE_AGE = 18;
const citizen = "Nepali";

if (ELIGIBLE_VOTE_AGE > 18 && citizen === "Nepali") {
  console.log("You are eligible to vote");
} else {
  console.log("You aren't eligible to vote");
}

// Even numbers between 1 -10
console.log("Even numbers between 1 - 10 is : ");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

// prints number between 8 to 25
console.log("numbers between 8 - 25 is : ");
let counter = 8;
do {
  console.log(counter);
  counter++;
} while (counter <= 25);


// fruits benefits checker

let fruit = "Pineapple";
let benefit = "";

switch (fruit) {
  case "Apple":
    benefit = "Apple is healthy";
    break;

  case "Pineapple":
    benefit = "Pineapple reduce the risk of cancer.";
    break;

  case "Banana":
    benefit = "Banana controls blood sugar level.";
    break;

  case "Papaya":
    benefit = "Papaya improves digestion.";
    break;

  default:
    break;
}

console.log(benefit);