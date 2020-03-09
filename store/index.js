import Vue from 'vue'
import Vuex from 'vuex'
import user from '../api/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: "",
		userInfo: {},
		token: ""
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
		}
	},
	actions: {
		login({
			commit,
			state
		}, codeMap) {
			// state.userInfo = userInfo;
			// state.userName = userInfo.nickName || '新用户';
			// state.hasLogin = true;
			// console.log(state.userInfo);

			// let data = {
			// 	"userid": userInfo.data.account,
			// 	"passwd": userInfo.data.password
			// };

			//请求后台
			return new Promise((resolve, reject) => {
				user.login(codeMap).then(res => {
					commit('setToken', res.data)
					resolve(res)
				}).catch(err => {
					reject(err)
				})
			})
		},
	}
})

export default store
