export default class UserName {
  constructor(userName) {
    this.userName = userName;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }

  checkEmpty() {
    if (this.UserName === "") {
      throw Error("Invalid Username");
    }
  }
  checkMaxLength() {
    if (this.userName.length > 50) {
      throw Error("Max length Reached Username");
    }
  }
  checkInvalidInputs() {
    if (this.userName.includes(",") || this.userName.includes("%")) {
      throw Error("Invalid Username");
    }
  }
}
