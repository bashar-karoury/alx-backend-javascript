export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set name(name) {
    this._name = name; // eslint-disable-line 
  }

  get name() {
    return this._name; // eslint-disable-line 
  }

  set code(code) {
    this._code = code; // eslint-disable-line 
  }

  get code() {
    return this._code; // eslint-disable-line 
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
