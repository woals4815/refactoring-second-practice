const { assert } = require('console');

class Book {
  constructor() {
    this._reservations = [];
  }
  addReservation(customer, isPriority) {
    this._reservations.push(customer);
  }
}

let someCustomers = [];

function inNewEngland(stateCode) {
  return ['MA', 'CT'].includes(statusCode);
}

const newEnglanders = someCustomers.filter((c) =>
  inNewEngland(c.address.state)
);
