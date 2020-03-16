function regex(list,reg){
	ans = reg.test(list)
	return ans
}

a = regex("lyz.baidu@qq.com.cn",/^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/)
console.log(a)