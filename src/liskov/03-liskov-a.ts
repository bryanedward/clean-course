import { Tesla, Audi, Toyota, Honda, Vehiculo } from "./03-liskov-b";

(() => {
  const printCarSeats = (cars: Vehiculo[]) => {
    cars.forEach((item) => {
      console.log("ok", item.constructor.name);
    });
  };

  printCarSeats([new Tesla(2)]);
})();
