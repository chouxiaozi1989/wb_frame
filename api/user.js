import config from '../config/config.js'

const login = function(data) {
	// let Base64 = require('js-base64').Base64;
	// let request_data = encodeURIComponent(Base64.encode(encodeURIComponent(JSON.stringify(data))));
	//请求后台

	return new Promise((resolve, reject) => {
		uni.request({
			url: 'http://10.1.92.156:8080/user/login',
			// url: config.baseUrl + '/user/logon',
			data: data,
			method: 'POST',
			header: {
				"Content-Type": "application/x-www-form-urlencoded;text/html;charset=UTF-8" //自定义请求头信息
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err)
			}
		});
	})
}

const logout = function(data) {
	let Base64 = require('js-base64').Base64;
	let request_data = encodeURIComponent(Base64.encode(encodeURIComponent(JSON.stringify(data))));
	//请求后台
	uni.request({
		url: config.baseUrl + '/user/logout', //仅为示例，并非真实接口地址。
		data: request_data,
		method: 'POST',
		header: {
			"Content-Type": "application/x-www-form-urlencoded;text/html;charset=UTF-8" //自定义请求头信息
		},
		success: (res) => {
			console.log(res.data);
			return res;
		},
		fail: (res) => {
			console.log(res);
			return res;
		}
	});
}

export default {
	login,
	logout
}
