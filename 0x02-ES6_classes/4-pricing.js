// import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    this._amount = amount; // eslint-disable-line 
  }

  get amount() {
    return this._amount; // eslint-disable-line 
  }

  set currency(currency) {
    this._currency = currency; // eslint-disable-line 
  }

  get currency() {
    return this._currency; // eslint-disable-line 
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
