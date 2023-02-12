(() => {
  // no aplicando el principio de responsabilidad unica
  // priorirar la composicion

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
  }

  class User {
    public lastAcess: Date;
    public role: string;
    public email: string;
    constructor({ email, role }: UserProps) {
      this.lastAcess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ role, email });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
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
  console.log("clase c");
  console.log("🚀 ~ file: 06-classesb.ts:66 ~ userSettingd", userSettingd);
})();
