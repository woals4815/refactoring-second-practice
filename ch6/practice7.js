const operatingPlan = {
  temperatureFloor: 10,
  temperatureCeiling: 50,
};

const station = {
  name: 'sinchon station',
  readins: [
    { temp: 47, time: '11:00' },
    { temp: 54, time: '12:00' },
  ],
};

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}

function readingsOutsideRange(station, min, range) {
  return station.readings.filter((r) => r.temp < min || r.temp > range.max);
}

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, range);
