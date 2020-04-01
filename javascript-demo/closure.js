
var clo = function(){
	var x
	return {
		add: function (){
			x++
		},
		sub: function (){
			x--
		}
	}
}

a = clo()
a.add()
console.log(
	a.add())