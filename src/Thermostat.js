function Thermostat() {
  this.currentTemperature = 20;
  this.minimumTemperature = 10;
}

Thermostat.prototype.increase = function() {
  this.currentTemperature += 1;
  return this.currentTemperature;
};

Thermostat.prototype.decrease = function() {
  if (this.currentTemperature > this.minimumTemperature) {this.currentTemperature -=1};
  return this.currentTemperature;
};
