class Plane 
	constructor:(@name, @seats, @weightCapacity, @fuelCapacity, @fuelLevel, @passengers = [], @crew = []) ->
		@id = counter++
counter = 0
module.exports = Plane