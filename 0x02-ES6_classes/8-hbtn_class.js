export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // eslint-disable-line 
    this._location = location; // eslint-disable-line 
  }

  toString() {
    return this._location; // eslint-disable-line  
  }

  valueOf() {
    return this._size; // eslint-disable-line 
  }
}
