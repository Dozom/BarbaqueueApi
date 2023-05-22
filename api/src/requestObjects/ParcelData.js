export default class ParcelData {
  constructor() {
    this.id_user = null;
    this.location = null;
    this.people_price = null;
    this.capacity = null;
    this.title = null;
    this.description = null;
    this.image1 = null;
    this.image2 = null;
    this.image3 = null;
  }

  getData() {
    return {
      id_user: this.id_user,
      location: this.location,
      people_price: this.people_price,
      capacity: this.capacity,
      title: this.title,
      description: this.description,
      image1: this.image1,
      image2: this.image2,
      image3: this.image3,
    };
  }
}
