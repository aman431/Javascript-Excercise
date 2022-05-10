class User {
  #fullname;

  constructor(firstname, lastname) {
    this.#validate(firstname);
    this.#fullname = `${firstname} ${lastname}`;
  }

  #validate(name) {
    if (name.length < 3) {
      throw new Error("invallid name");
    }
  }

  printfullname() {
    console.log(this.#fullname);
  }
}

const user = new User("abc", "def");
user.printfullname();
user.#fullname; // throw Error Private field
user.#validate("test"); // throw Error Private field
