const Cat = require("../src/cat");

describe("Cat test", () => {
  // 1

  it("Cat sleeps", () => {
    let myCat = new Cat("Garfield", false, "", 0);
    let targetCat = new Cat("Garfield", true, "", 2);

    myCat.sleep();
    expect(myCat).toEqual(targetCat);
  });

  //2

  it("Cat wakes up", () => {
    let myCat = new Cat("Garfield", true, "", 2);
    let targetCat = new Cat("Garfield", false, "", 1);

    myCat.wakeUp();
    expect(myCat).toEqual(targetCat);
  });

  // 3

  it("The cat is sleeping, but we put it to sleep again", () => {
    let myCat = new Cat("Garfield", true, "", 2);
    let targetCat = new Cat("Garfield", true, "Can not be put to sleep..", 2);

    myCat.sleep();
    expect(myCat).toEqual(targetCat);
  });

  // 4

  it("The cat from the sleeperror state, is put to sleep yet again", () => {
    let myCat = new Cat("Garfield", true, "Can not be put to sleep..", 0);
    let targetCat = new Cat("Garfield", true, "Can not be put to sleep..", 0);

    myCat.sleep();

    expect(myCat).toEqual(targetCat);
  });

  // 5

  it("Waking up a cat from sleeperror state", () => {
    let myCat = new Cat("Garfield", true, "Can not be put to sleep..", 2);
    let targetCat = new Cat("Garfield", false, "", 1);
    myCat.wakeUp();

    expect(myCat).toEqual(targetCat);
  });

  // 6

  it("Wake up an already awakened cat", () => {
    let myCat = new Cat("Garfield", false, "", 2);
    let targetCat = new Cat(
      "Garfield",
      false,
      "The cat can not be woken up..",
      2
    );
    myCat.wakeUp();

    expect(myCat).toEqual(targetCat);
  });

  // 7

  it("Wake up a wakeuperror state cat", () => {
    let myCat = new Cat("Garfield", false, "The cat can not be woken up..", 2);
    let targetCat = new Cat(
      "Garfield",
      false,
      "The cat can not be woken up..",
      2
    );

    myCat.wakeUp();

    expect(myCat).toEqual(targetCat);
  });

  // 8

  it("Put to sleep a wakeuperror state cat", () => {
    let myCat = new Cat("Garfield", false, "The cat can not be woken up..", 1);
    let targetCat = new Cat("Garfield", true, "", 3);

    myCat.sleep();

    expect(myCat).toEqual(targetCat);
  });
});
