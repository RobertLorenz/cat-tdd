const Cat = require("./cat");

const myCat = new Cat("Whiskers");

function testCatBehavior() {
  console.log("Testing cat's behavior...\n");

  console.log(myCat.status());
  console.log(myCat.eat());
  console.log(myCat.sleep());
  console.log(myCat.wakeUp());
  console.log(myCat.status());
}

testCatBehavior();
