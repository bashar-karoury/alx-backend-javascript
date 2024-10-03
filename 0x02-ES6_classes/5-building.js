export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    const proto = Object.getPrototypeOf(this); // Get the prototype of the current object
    if (new.target !== Building && !proto.hasOwnProperty('evacuationWarningMessage')) { // eslint-disable-line 
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(sqft) {
    this._sqft = sqft; // eslint-disable-line 
  }

  get sqft() {
    return this._sqft; // eslint-disable-line 
  }

  evacuationWarningMessage() { // eslint-disable-line 
    throw (new Error('Class extending Building must override evacuationWarningMessage'));
  }
}
