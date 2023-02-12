(() => {
  // no aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    gender: Gender;
    birthdate: Date;
    name: string;
  }

  class User extends Person {
    public lastAcess: Date;
    public email: string;
    constructor({ gender, birthdate, name, email }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAcess = new Date();
      this.email = email;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      email,
      role,
      name,
      gender,
      birthdate,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettingd = new UserSettings({
    workingDirectory: "/",
    lastOpenFolder: "/home",
    email: "eda@gmail.com",
    role: "admin",
    name: "bryan",
    gender: "M",
    birthdate: new Date("1996-10-21"),
  });
  console.log("ok");
  console.log("🚀 ~ file: 06-classesb.ts:66 ~ userSettingd", userSettingd);
})();
