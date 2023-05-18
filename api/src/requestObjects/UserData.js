export default class UserData {
  constructor() {
    this.name = null;
    this.birth_date = null;
    this.email = null;
    this.last_name = null;
    this.password = null;
    this.phone_number = null;
  }
  getData() {
    return {
      name: this.name,
      last_name: this.last_name,
      birth_date: this.birth_date,
      phone_number: this.phone_number,
      email: this.email,
      password: this.password,
    };
  }
}
