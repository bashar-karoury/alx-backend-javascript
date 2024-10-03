import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set floors(floors) {
    this._floors = floors; // eslint-disable-line 
  }

  get floors() {
    return this._floors; // eslint-disable-line 
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
