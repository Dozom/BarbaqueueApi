export default class Title {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
  }

  checkEmpty() {
    if (this.values === "") {
      throw Error("Empty field Title");
    }
  }
}
