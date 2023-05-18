export default class birthDate {
  constructor(birthDate) {
    this.birthDate = birthDate;
    this.checkEmpty();
    this.checkMaxLength();
    this.checkInvalidInputs();
    this.parseDate();
  }

  checkEmpty() {
    if (this.birthDate === "") {
      throw Error("Empty field birthDate");
    }
  }
  checkMaxLength() {
    if (this.birthDate.length > 50) {
      throw Error("Max length Reached birthDate");
    }
  }
  checkInvalidInputs() {
    if (this.birthDate.includes(",") || this.birthDate.includes("%")) {
      throw Error("Invalid birthDate");
    }
  }
  parseDate() {
    try {
      this.birthDate = new Date(this.birthDate);
    } catch (error) {
      throw Error("Invalid Date Format");
    }
  }
}
