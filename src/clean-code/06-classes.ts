(() => {
  // no aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAcess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdadte: Date
    ) {
      super(name, gender, birthdadte);
      this.lastAcess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      emal: string,
      role: string,
      name: string,
      gender: Gender,
      birthdadte: Date
    ) {
      super(emal, role, name, gender, birthdadte);
    }
  }

  const newPerson = new Person("Fernando", "M", new Date("1985-10-21"));
  const userSettingd = new UserSettings(
    "/",
    "/home",
    "eda@gmail.com",
    "admin",
    "bryan",
    "M",
    new Date("1996-10-21")
  );
})();
