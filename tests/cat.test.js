const Cat = require("../src/cat");

describe("Cat class", () => {
  let myCat;

  beforeEach(() => {
    myCat = new Cat("TestCat");
  });

  it("Initializes with correct default values", () => {
    expect(myCat.name).toBe("TestCat");
    expect(myCat.energy).toBe(10);
    expect(myCat.hunger).toBe(5);
    expect(myCat.happiness).toBe(5);
    expect(myCat.isSleeping).toBe(false);
  });

  it("Eat decreases hunger and increases happiness and energy", () => {
    myCat.hunger = 5;
    myCat.eat();
    expect(myCat.hunger).toBeLessThan(5);
    expect(myCat.energy).toBeGreaterThan(10);
    expect(myCat.happiness).toBeGreaterThan(5);
  });

  it("Play decreases energy and increases hunger and happiness", () => {
    myCat.play();
    expect(myCat.energy).toBeLessThan(10);
    expect(myCat.hunger).toBeGreaterThan(5);
    expect(myCat.happiness).toBeGreaterThan(5);
  });

  it("Sleep sets isSleeping and increases energy after waking", (done) => {
    myCat.sleep();
    expect(myCat.isSleeping).toBe(true);
    setTimeout(() => {
      expect(myCat.isSleeping).toBe(false);
      expect(myCat.energy).toBeGreaterThan(10);
      done();
    }, 3100);
  });
});
