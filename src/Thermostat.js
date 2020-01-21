function Thermostat() {
  this.currentTemperature = 20;
}

Thermostat.prototype.increase = function() {
  this.currentTemperature += 1;
  return this.currentTemperature;
};

