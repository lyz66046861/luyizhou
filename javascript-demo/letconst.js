if (1) {
	var x = 10
}
console.log(x)

if (1) {
	let x = 20
	let y = 20
}

console.log(x) //10

try {
	console.log(y)
} catch (e) {
	var err = e
} finally {
	if (err) {
	console.log("======================Error has been modfied======================" )
	console.log(err.message)
	console.log("======================End of Error ======================")
	} else{
		console.log("==============Correct End=============")
	}
}
