export default class Title {
  constructor(Title) {
    this.Title = Title;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
  }

  checkEmpty() {
    if (this.Title === "") {
      throw Error("Empty field Title");
    }
  }
  checkMaxLength() {
    if (this.Title.length > 50) {
      throw Error("Max length Reached Title");
    }
  }
  checkInvalidInputs() {
    if (this.Title.includes(",") || this.Title.includes("%")) {
      throw Error("Invalid Title");
    }
  }
}
