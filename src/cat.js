class Cat {
  constructor(name, isSleeping, errorState, mood) {
    this.name = name;
    this.isSleeping = isSleeping;
    this.errorState = errorState;
    this.mood = mood;
  }

  sleep() {
    const errorMessage = "Can not be put to sleep..";

    if (this.isSleeping === true) {
      this.errorState = errorMessage;
    } else {
      this.isSleeping = true;
      this.mood = this.mood + 2;
      this.errorState = "";
    }
  }

  wakeUp() {
    const errorMessage = "The cat can not be woken up..";

    if (this.isSleeping === false) {
      this.errorState = errorMessage;
    } else {
      this.isSleeping = false;
      this.mood = this.mood - 1;
      this.errorState = "";
    }
  }
}

module.exports = Cat;
