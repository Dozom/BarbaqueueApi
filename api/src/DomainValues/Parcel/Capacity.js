export default class Capacity {
  constructor(Capacity) {
    this.Capacity = Capacity;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }

  checkEmpty() {
    if (this.Capacity === 0) {
      throw Error("Not allowed for 0 people");
    }
  }
  checkMaxLength() {
    if (this.Capacity > 100) {
      throw Error("Not allowed for more than 100 Persons");
    }
  }
  checkInvalidInputs() {
    if (typeof this.Capacity === "string") {
      throw Error("Invalid Capacity");
    }
  }
}
