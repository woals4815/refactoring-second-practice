const { assert } = require('console');

class Book {
  constructor() {
    this._reservations = [];
  }
  addReservation(customer, isPriority) {
    this._reservations.push(customer);
  }
}
