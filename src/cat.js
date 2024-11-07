class Cat {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.happiness = 5;
    this.isSleeping = false;
  }

  sleep() {
    if (this.isSleeping) {
      return `${this.name} is already sleeping.`;
    } else {
      this.isSleeping = true;
      this.hunger += 2;
      this.happiness -= 1;
      return `${this.name} is sleeping... Zzz`;
    }
  }

  wakeUp() {
    if (!this.isSleeping) {
      return `${this.name} is already awake.`;
    } else {
      this.isSleeping = false;
      this.hunger += 1;
      this.happiness += 2;
      return `${this.name} has woken up!`;
    }
  }

  eat() {
    if (this.hunger <= 2) {
      return `${this.name} is not hungry.`;
    } else {
      this.hunger -= 3;
      this.happiness += 1;
      return `${this.name} is eating...`;
    }
  }

  status() {
    return `--- ${this.name}'s Status ---
        Hunger: ${this.hunger}
        Happiness: ${this.happiness}
        Sleeping: ${this.isSleeping ? "Yes" : "No"}`;
  }
}

module.exports = Cat;
