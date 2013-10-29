// Generated by CoffeeScript 1.6.3
(function() {
  var Plane, counter;

  Plane = (function() {
    function Plane(name, seats, weightCapacity, fuelCapacity, fuelLevel, passengers, crew) {
      this.name = name;
      this.seats = seats;
      this.weightCapacity = weightCapacity;
      this.fuelCapacity = fuelCapacity;
      this.fuelLevel = fuelLevel;
      this.passengers = passengers != null ? passengers : [];
      this.crew = crew != null ? crew : [];
      this.id = counter++;
    }

    return Plane;

  })();

  counter = 0;

  module.exports = Plane;

}).call(this);
