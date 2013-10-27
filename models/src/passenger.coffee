Person = require("./person")

class Passenger extends Person 
  constructor:(@destination, @name, @age, @weight) ->
  	super(@name, @age, @weight)

module.exports = Passenger