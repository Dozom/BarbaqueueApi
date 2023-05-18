export default class birthDate {
  constructor(values) {
    this.values = values;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
    this.parseDate();
  }

  checkEmpty() {
    if (this.values === "") {
      throw Error("Empty field birthDate");
    }
  }
  checkMaxLength() {
    if (this.values.length > 50) {
      throw Error("Max length Reached birthDate");
    }
  }
  checkInvalidInputs() {
    if (this.values.includes(",") || this.values.includes("%")) {
      throw Error("Invalid birthDate");
    }
  }
  parseDate() {
    try {
      this.values = new Date(this.values);
    } catch (error) {
      throw Error("Invalid Date Format");
    }
  }
}
