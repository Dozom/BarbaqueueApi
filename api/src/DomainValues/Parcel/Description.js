export default class Description {
  constructor(Description) {
    this.Description = Description;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }

  checkEmpty() {
    if (this.Description === "") {
      throw Error("Empty field Description");
    }
  }
  checkMaxLength() {
    if (this.Description.length > 150) {
      throw Error("Max length Reached Description");
    }
  }
  checkInvalidInputs() {
    if (this.Description.includes(",") || this.Description.includes("%")) {
      throw Error("Invalid Description");
    }
  }
}
