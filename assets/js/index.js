class Vehicle {
  constructor(dimensions, brand, model, manufactoreDate) {
    this._dimensions = dimensions;
    this._brand = brand;
    this._model = model;
    this._manufactoreDate = new Date(manufactoreDate);
  }

  get age() {
    const currentDate = new Date();
    const manufactureYear = this._manufactoreDate.getFullYear();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - manufactureYear;
    return age;
  }

  getFullInfo() {
    return `Vehicle brand is ${this._brand}, model: ${this._model}, age: ${this.age}`;
  }
}

const auto = new Vehicle(1, '2', '3', '3.07.2000');
console.log(auto.getFullInfo());