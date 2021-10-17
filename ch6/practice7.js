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

function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

alerts = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);
