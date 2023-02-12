(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    Firstname: string;
    Lastname: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public Lastname: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ Firstname: name, Lastname, gender, birthdate }: PersonProps) {
      this.name = name;
      this.Lastname = Lastname;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  // Nuevo User Settings
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    name: string;
    Lastname: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    // constructor(
    //     public person: Person,
    //     public user  : User,
    //     public settings: Settings,
    // ){}
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
      lastFolderOpen,
      Lastname,
    }: UserSettingsProps) {
      this.person = new Person({
        Firstname: name,
        Lastname,
        gender,
        birthdate,
      });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    Lastname: "",
    gender: "M",
    lastFolderOpen: "/home",
    name: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
