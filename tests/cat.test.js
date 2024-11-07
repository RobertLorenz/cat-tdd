const Cat = require("../src/cat");

describe("Cat class", () => {
  let myCat;

  beforeEach(() => {
    myCat = new Cat("TestCat");
  });

  it("Initializes with correct default values", () => {
    expect(myCat.name).toBe("TestCat");
    expect(myCat.hunger).toBe(5);
    expect(myCat.happiness).toBe(5);
    expect(myCat.isSleeping).toBe(false);
  });

  it("Eat decreases hunger and increases happiness", () => {
    myCat.hunger = 5;
    myCat.eat();
    expect(myCat.hunger).toBeLessThan(5);
    expect(myCat.happiness).toBeGreaterThan(5);
  });

  it("Sleep sets isSleeping and increases hunger and decreases happiness", () => {
    myCat.sleep();
    expect(myCat.isSleeping).toBe(true);
    expect(myCat.hunger).toBeGreaterThan(5);
    expect(myCat.happiness).toBeLessThan(5);
  });

  it("WakeUp sets isSleeping and increases happiness and decreases hunger", () => {
    myCat.sleep();
    myCat.wakeUp();
    expect(myCat.isSleeping).toBe(false);
    expect(myCat.happiness).toBeGreaterThan(5);
    expect(myCat.hunger).toBeGreaterThan(5);
  });

  it("Status shows the correct cat's current status", () => {
    expect(myCat.status()).toContain("Hunger: 5");
    expect(myCat.status()).toContain("Happiness: 5");
    expect(myCat.status()).toContain("Sleeping: No");
  });
});
