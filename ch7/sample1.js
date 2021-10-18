class Org {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }

  set name(aString) {
    return (this._name = aString);
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const org = new Org({ name: 'jayden', country: 'KR' });

function getOrg() {
  return org;
}

/* <--------------------------------> */

class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData._data;
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

/* <--------------------------------> */
