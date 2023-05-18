export default class PeoplePrice {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
  }

  checkEmpty() {
    if (this.values === 0) {
      throw Error("0 euros for people is not allowed");
    }
  }
}
