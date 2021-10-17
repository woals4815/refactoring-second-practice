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

function inNewEngland(aCustomer) {
  return ['MA', 'CT'].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
