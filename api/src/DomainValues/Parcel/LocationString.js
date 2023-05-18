export default class LocationString {
  constructor(LocationString) {
    this.LocationString = LocationString;
    this.checkEmpty();
    this.checkMaxLength();
  }

  checkEmpty() {
    if (this.LocationString === "") {
      throw Error("Empty field Location");
    }
  }
  checkMaxLength() {
    if (this.LocationString.length > 250) {
      throw Error("Max length Reached Location");
    }
  }
}
