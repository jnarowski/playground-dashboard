const tokenKey = '_playground_token'

export default {
  getAccessToken: () => {
    return localStorage.getItem(tokenKey)
  },
  setAccessToken: (token) => {
    localStorage.setItem(tokenKey, token)
  },
  clearAccessToken: () => {
    localStorage.removeItem(tokenKey)
  },
}
