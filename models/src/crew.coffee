Person = require("./person")

class Crew extends Person
	constructor:(@name, @age, @weight, @title) ->
 		super(@name, @age, @weight)

module.exports = Crew