export default class ParcelId {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
  }

  checkEmpty() {
    if (this.values === 0) {
      throw Error("Invalid parcelId");
    }
  }
}
