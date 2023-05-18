export default class LocationString {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
    this.checkMaxLength();
  }

  checkEmpty() {
    if (this.values === "") {
      throw Error("Empty field Location");
    }
  }
  checkMaxLength() {
    if (this.values.length > 250) {
      throw Error("Max length Reached Location");
    }
  }
}
