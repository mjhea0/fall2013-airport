// Generated by CoffeeScript 1.6.3
(function() {
  var Plane, counter;

  Plane = (function() {
    function Plane(id, name, seats, weightCapacity, fuelCapacity, fuelLevel, passengers, crew) {
      this.id = id != null ? id : counter++;
      this.name = name;
      this.seats = seats;
      this.weightCapacity = weightCapacity;
      this.fuelCapacity = fuelCapacity;
      this.fuelLevel = fuelLevel;
      this.passengers = passengers != null ? passengers : [];
      this.crew = crew != null ? crew : [];
    }

    return Plane;

  })();

  counter = 0;

  module.exports = Plane;

}).call(this);