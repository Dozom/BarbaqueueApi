export default class BillingData {
  constructor() {
    this.user_id = null;
    this.parcel_id = null;
    this.people_amount = null;
    this.total_price = null;
    this.date = null;
  }
  getData() {
    return {
      user_id: this.user_id,
      parcel_id: this.parcel_id,
      people_amount: this.people_amount,
      total_price: this.total_price,
      date: this.date,
    };
  }
}
