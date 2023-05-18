export default class PeoplePrice {
  constructor(PeoplePrice) {
    this.PeoplePrice = PeoplePrice;
    this.checkEmpty();
  }

  checkEmpty() {
    if (this.PeoplePrice === 0) {
      throw Error("0 euros for people is not allowed");
    }
  }
}
