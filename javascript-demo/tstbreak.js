class Tstbreak{
	constructor(arg) {
	   this.array = arg 
	}
	
	getin(point){
		for(var i = 0 ; i < this.array.length ; i++){
			console.log(this.array[i])
			if(i == point )break
			}
		}
}

const a = new Tstbreak([9,8,7,6,5])
a.getin(1)


// output: "Rectangle"