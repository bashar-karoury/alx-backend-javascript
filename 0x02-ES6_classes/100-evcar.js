import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // eslint-disable-line  
  }

  cloneCar() { // eslint-disable-line  
    const SuperConstructor = Object.getPrototypeOf(EVCar.prototype).constructor;
    return new SuperConstructor();
  }
}
