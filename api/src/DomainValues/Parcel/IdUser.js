export default class IdUser {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
  }

  checkEmpty() {
    if (this.values === 0) {
      throw Error("Invalid IdUser");
    }
  }
}
