export default class ParcelData {
  constructor() {
    this.id_user = null;
    this.location = null;
    this.people_price = null;
    this.capacity = null;
    this.title = null;
    this.description = null;
  }
  getData() {
    return {
      id_user: this.id_user,
      location: this.location,
      people_price: this.people_price,
      capacity: this.capacity,
      title: this.title,
      description: this.description,
    };
  }
}
