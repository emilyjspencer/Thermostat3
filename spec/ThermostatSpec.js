describe('Thermostat', function() {
  var temperature;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('shows the default temperature of 20', function() {
    expect(thermostat.currentTemperature).toEqual(20)
  });

  it('can increase the temperature with an UP function', function() {
    expect(thermostat.increase()).toEqual(21)
  });
});