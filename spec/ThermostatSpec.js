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

  it('can decrease the temperature with a DOWN function', function() {
    expect(thermostat.decrease()).toEqual(19)
  });

  it('cannot reduce the temperature below the minimum(10)', function() {
    for(let step = 0; step < 10; step++) {thermostat.decrease();}
    expect(thermostat.decrease()).toEqual(10)
  });
});