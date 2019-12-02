module.exports = (param) =>{
	let paramData = {
		url:param.url,
		method: param.method,
		data: param.data || {},
		header: param.header || {},
	}
	
	//请求方式判断
	if(paramData.method){
		paramData.method = paramData.method.toUpperCase();
		if(paramData.method == 'POST'){
			paramData.header = {"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
		}
	}
	
	//发起请求 加载动画
	if(!param.hideLoading){
		uni.showLoading({
			title:'加载中...'
		})
	}
	
	//发起网络请求
	uni.request({
		url:paramData.url,
		method:paramData.method || 'GET',
		header:paramData.header,
		data:paramData.data,
		success:(res) =>{
			if(res.statusCode && res.statusCode != 200){
				uni.showModal({
					content:res.msg
				})
				return
			}
			typeof param.success == 'function' && param.success(res.data)
		},
		complete:(e) =>{
			console.log('请求成功')
			uni.hideLoading()
			typeof param.complete == 'function' && param.complete(res.data)
			return
		},
		fail:(err) =>{
			uni.showModal({
				content:err.msg
			})
			typeof param.complete == 'function' && param.complete(err.data)
		}
	})
}