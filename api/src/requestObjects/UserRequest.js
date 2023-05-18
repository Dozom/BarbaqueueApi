export default class UserRequest {
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
      name: this.userName,
      last_name: this.lastName,
      birth_date: this.birthDate,
      phone_number: this.phoneNumber,
      email: this.email,
      password: this.password,
    };
  }
}
