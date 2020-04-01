var obj = {
	name: "lyz",
	getName: function() {
		console.log("I'm " + this.name)
	}
}

obj.resetName = function(){
	this.name = "NNN"
	console.log(this.name)
}
console.log(obj)
obj.getName()
obj.resetName()



