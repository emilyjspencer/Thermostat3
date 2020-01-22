$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#current-temp-display').text(thermostat.currentTemperature);
  $('#plus').on('click', function() {
    thermostat.increase();
  $('#current-temp-display').text(thermostat.currentTemperature);
  });

  $('#current-temp-display').text(thermostat.currentTemperature);
  $('#minus').on('click', function() { 
    thermostat.decrease();
  $('#current-temp-display').text(thermostat.currentTemperature);
  });

  $('#current-temp-display').text(thermostat.currentTemperature);
  $('#reset').on('click', function() {
    thermostat.reset();
  $('#current-temp-display').text(thermostat.currentTemperature);
  });

  $('#current-temp-display').text(thermostat.currentTemperature);
  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
  $('#current-temp-display').text(thermostat.currentTemperature);
  });

  $('#current-temp-display').text(thermostat.currentTemperature);
  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
  $('#current-temp-display').text(thermostat.currentTemperature);
  });
});



