console.log("wqe")
var clo = function(){
	var x = 3
	return {
		add: function (){
			x++
		},
		sub: function (){
			x--
		},
		show: function(){
			console.log(x)
		}
	}
}

a = clo()
console.log(
	a.show())

function outerFn() {
	var i = 0;
	function innnerFn() {
		i++;
		console.log(i);
	}
	return innnerFn;
}
var inner1 = outerFn();
var inner2 = outerFn();
outerFn()();
outerFn()();
inner1();
inner2();
inner1();
inner2();
