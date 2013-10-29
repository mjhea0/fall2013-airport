Person = require("./person")

class Passenger extends Person 
  constructor:(@name, @age, @weight, @destination) ->
  	super(@name, @age, @weight)

module.exports = Passenger