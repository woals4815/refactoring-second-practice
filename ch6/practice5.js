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
  const statusCode = aCustomer.address.state;
  return NEWinNewEngland(statusCode);
}

function NEWinNewEngland(stateCode) {
  return ['MA', 'CT'].includes(statusCode);
}

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
