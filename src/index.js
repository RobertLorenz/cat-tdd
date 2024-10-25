const Cat = require("./cat");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const myCat = new Cat("Whiskers");

function promptUser() {
  rl.question(
    `
What would you like to do with ${myCat.name}?
Options: "feed", "play", "sleep", "meow", "status", "exit"
> `,
    (input) => {
      handleUserInput(input.trim().toLowerCase());
    }
  );
}

function handleUserInput(action) {
  switch (action) {
    case "feed":
      myCat.eat();
      break;
    case "play":
      myCat.play();
      break;
    case "sleep":
      myCat.sleep();
      break;
    case "meow":
      myCat.meow();
      break;
    case "status":
      myCat.status();
      break;
    case "exit":
      console.log(`Goodbye!`);
      rl.close();
      return;
    default:
      console.log("Invalid action. Please choose a valid option.");
  }
  setTimeout(promptUser, 500);
}

console.log(
  `Welcome! You are now interacting with ${myCat.name}, your virtual cat.`
);
promptUser();
