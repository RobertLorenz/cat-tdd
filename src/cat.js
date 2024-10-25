const readline = require("readline");
const catAsciiArt = require("./assets/catAsciiArt");

class Cat {
  constructor(name) {
    this.name = name;
    this.energy = 10;
    this.hunger = 5;
    this.happiness = 5;
    this.isSleeping = false;
  }

  sleep() {
    if (this.isSleeping) {
      console.log(`${this.name} is already sleeping.`);
    } else {
      console.log(`${this.name} is sleeping... Zzz`);
      this.isSleeping = true;
      setTimeout(() => {
        this.energy += 5;
        this.hunger += 2;
        this.happiness += 1;
        this.isSleeping = false;
        console.log(`${this.name} woke up! Energy: ${this.energy}`);
        this.displayMood();
      }, 3000);
    }
  }

  eat() {
    if (this.hunger <= 2) {
      console.log(`${this.name} is not hungry.`);
    } else {
      console.log(`${this.name} is eating...`);
      this.hunger -= 3;
      this.energy += 2;
      this.happiness += 2;
      console.log(`${this.name} finished eating.`);
      this.displayMood();
    }
  }

  play() {
    if (this.energy <= 2) {
      console.log(`${this.name} is too tired to play. Maybe let them sleep?`);
    } else {
      console.log(`${this.name} is playing! 🐾`);
      this.energy -= 3;
      this.hunger += 2;
      this.happiness += 3;
      console.log(`${this.name} had a fun time playing!`);
      this.displayMood();
    }
  }

  meow() {
    console.log(`${this.name} says: "Meow!"`);
    this.happiness += 1;
    this.displayMood();
  }

  status() {
    console.log(`--- ${this.name}'s Status ---
        Energy: ${this.energy}
        Hunger: ${this.hunger}
        Happiness: ${this.happiness}
        Sleeping: ${this.isSleeping ? "Yes" : "No"}
        `);
    this.displayMood();
  }

  displayMood() {
    console.log("\nCurrent Mood:");
    if (this.happiness >= 8) {
      console.log(`${this.name} ${catAsciiArt.veryHappy}`);
    } else if (this.happiness >= 5) {
      console.log(`${this.name} ${catAsciiArt.content}`);
    } else if (this.happiness >= 3) {
      console.log(`${this.name} ${catAsciiArt.down}`);
    } else {
      console.log(`${this.name} ${catAsciiArt.verySad}`);
    }
  }
}

module.exports = Cat;
