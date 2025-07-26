/**
 * Abstract class for all transport
 * @class Vehicle
 * 
 * @param {Object} dimensions - Vehicle dimensions: length, width, height in meters
 * @param {string} brand - Vehicle brand
 * @param {string} model - Vehicle model
 * @param {string} manufactoreDate - Date of manufacture in format DD.MM.YYYY
 */

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

/**
 * 
 * @returns {string} Row with brand, model and vehicle age
 */

  getFullInfo() {
    return `Vehicle brand is ${this._brand}, model: ${this._model}, age: ${this.age}`;
  }
}

const auto = new Vehicle(
  { length: 4.5, width: 1.8, height: 1.6 },
  'Toyota',
  'Camry',
  '12.22.2000'
);
console.log(auto.getFullInfo());

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactoreDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactoreDate);
    this._passengerLimit = passengerLimit;
    this._passengerCount = passengerCount;
  }

  addPassenger() {
    if (this._passengerCount < this._passengerLimit) {
      this._passengerCount++;
      return true;
    } else {
      throw new RangeError(
        `PassengerLimit ${this._passengerLimit}, no free seats`
      );
    }
  }

  getFullInfo() {
    return `Vehicle brand is ${this._brand}, model: ${this._model}, age: ${this.age}, max seats: ${this._passengerLimit}`;
  }
}

const auto1 = new PassengerTransport(
  { length: 4.5, width: 1.8, height: 1.6 },
  'Seat',
  'Altea',
  '12.22.2009',
  6,
  5
);
console.log(auto1);
auto1.addPassenger();
console.log(auto1.getFullInfo());
