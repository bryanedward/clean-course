export abstract class Vehiculo {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda {
  constructor(private numberOfSeats: number) {}

  getNumberOfHondaSeats() {
    return this.numberOfSeats;
  }
}
