class Org {
  constructor(data) {
    this._data = data;
  }
}

const org = new Org({ name: 'jayden', country: 'KR' });

function getRawDataOfOrg() {
  return org._data;
}

function getOrg() {
  return org;
}
