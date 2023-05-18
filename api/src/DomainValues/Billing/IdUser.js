export default class IdUser {
  constructor(IdUser) {
    this.IdUser = IdUser;
    this.checkEmpty();
  }

  checkEmpty() {
    if (this.IdUser === 0) {
      throw Error("Invalid IdUser");
    }
  }
}
