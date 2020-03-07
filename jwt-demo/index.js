const jwt = require('jsonwebtoken')
const payload = {
	name : 'lyz',
	password : 'aiziji4162'
}

const secret = 'asdfAS2141'
const token = jwt.sign(payload,secret,{ expiresIn: '1day'})
console.log(token)

jwt.verify(token, secret, (err,decode)=>{
	if(err){
		console.log( err.message)
		return
	}
	console.log(decode)
})