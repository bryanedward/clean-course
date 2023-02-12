(function () {
    var Person = /** @class */ (function () {
        function Person(name, gender, birthdate) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
        return Person;
    }());
    var newPerson = new Person("Fernando", "M", new Date("1985-10-21"));
    console.log("🚀 ~ file: 06-classes.ts:11 ~ newPerson", newPerson);
})();
