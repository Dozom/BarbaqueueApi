export default class ParcelId {
  constructor(parcelId) {
    this.parcelId = parcelId;
    this.checkEmpty();
  }

  checkEmpty() {
    if (this.parcelId === 0) {
      throw Error("Invalid parcelId");
    }
  }
}
