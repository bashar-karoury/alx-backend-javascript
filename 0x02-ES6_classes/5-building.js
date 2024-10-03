export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    console.log(this.hasOwnProperty('evacuationWarningMessage'));
    console.log(this.hasOwnProperty('_sqft'));

    if (new.target !== Building && !this.hasOwnProperty('evacuationWarningMessage')) { // eslint-disable-line 
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
