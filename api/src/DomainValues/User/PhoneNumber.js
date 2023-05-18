export default class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }
  checkType() {
    if (typeof this.Email !== "string") {
      throw Error("Invalid Phone Number");
    }
  }
  checkEmpty() {
    if (this.phoneNumber === "") {
      throw Error("Empty field Phone Number");
    }
  }
  checkMaxLength() {
    if (this.phoneNumber.length > 50) {
      throw Error("Max length Reached Phone Number");
    }
  }
  checkInvalidInputs() {
    if (this.phoneNumber.includes(",") || this.phoneNumber.includes("%")) {
      throw Error("Invalid Phone Number");
    }
  }
}
