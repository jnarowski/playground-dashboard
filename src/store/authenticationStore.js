import { userLogin, userLogout } from '~/services/apiService'
import authenticationService from '~/services/authenticationService'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const state = {
  status: '',
  token: authenticationService.getAccessToken(),
  user: {},
}

export const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
}

export const actions = {
  async login({ commit }, params) {
    commit(LOGIN_REQUEST)
    try {
      const resp = await userLogin(params)
      const token = resp.headers.authorization
      const user = resp.data.user
      authenticationService.setAccessToken(token)
      commit(LOGIN_SUCCESS, { token, user })
      return resp
    } catch (err) {
      authenticationService.clearAccessToken()
      commit(LOGIN_FAILURE)
    }
  },
  async logout({ commit }) {
    try {
      const resp = await userLogout()
      authenticationService.clearAccessToken()
      return resp
    } catch (err) {
      commit(LOGIN_FAILURE)
    }
  },
}
// register({ commit }, user) {
//   return new Promise((resolve, reject) => {
//     commit("auth_request");
//     axios({
//       url: "http://localhost:3000/register",
//       data: user,
//       method: "POST"
//     })
//       .then(resp => {
//         const token = resp.data.token;
//         const user = resp.data.user;
//         localStorage.setItem("token", token);
//         // Add the following line:
//         axios.defaults.headers.common["Authorization"] = token;
//         commit("auth_success", token, user);
//         resolve(resp);
//       })
//       .catch(err => {
//         commit("auth_error", err);
//         localStorage.removeItem("token");
//         reject(err);
//       });
//   });
// },
// logout({ commit }) {
//   return new Promise((resolve, reject) => {
//     commit("logout");
//     localStorage.removeItem("token");
//     delete axios.defaults.headers.common["Authorization"];
//     resolve();
//   });
// }

export const mutations = {
  [LOGIN_REQUEST](state) {
    state.status = 'loading'
  },
  [LOGIN_SUCCESS](state, payload) {
    state.status = 'success'
    state.token = payload.token
    state.user = payload.user
  },
  [LOGIN_FAILURE](state) {
    state.status = 'error'
  },
  [LOGOUT_SUCCESS](state) {
    state.status = ''
    state.token = ''
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
