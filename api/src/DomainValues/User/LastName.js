export default class LastName {
  constructor(lastName) {
    this.lastName = lastName;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }
  checkType() {
    if (typeof this.Email !== "string") {
      throw Error("Invalid LastName");
    }
  }
  checkEmpty() {
    if (this.lastName === "") {
      throw Error("Empty field LastName");
    }
  }
  checkMaxLength() {
    if (this.lastName.length > 50) {
      throw Error("Max length Reached LastName");
    }
  }
  checkInvalidInputs() {
    if (this.lastName.includes(",") || this.lastName.includes("%")) {
      throw Error("Invalid LastName");
    }
  }
}
