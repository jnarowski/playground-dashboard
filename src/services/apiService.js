import axios from 'axios'
import authenticationService from '~/services/authenticationService'

import qs from 'qs'

const config = {
  baseUrl: 'http://localhost:5000',
}

const getApi = (options = {}) => {
  const params = {
    baseURL: config.baseUrl,
    paramsSerializer: function(params) {
      return qs.stringify(params, {
        arrayFormat: 'brackets',
      })
    },
  }

  if (!options.excludeHeaders) {
    const Authorization = authenticationService.getAccessToken()
    if (Authorization) {
      params.headers = Object.assign(
        {
          Authorization,
        },
        options.headers
      )
    }
  }

  const api = axios.create(params)

  api.defaults.timeout = 10000

  api.interceptors.response.use(undefined, function(error) {
    const currentPath = window.location.hash
    const loginPath = '/login'
    if (
      error.response &&
      error.response.status === 401 &&
      currentPath !== loginPath
    ) {
      authenticationService.clearSession()
      window.location.hash = loginPath
    }
    return Promise.reject(error)
  })

  return api
}

export const userLogin = async (user) => {
  const instance = getApi()

  return instance({
    url: '/users/sign_in',
    data: {
      user,
    },
    method: 'POST',
  })
}

export const userLogout = async () => {
  const instance = getApi()

  return instance({
    url: '/users/sign_out',
    method: 'DELETE',
  })
}

export const fetchHabits = async () => {
  const instance = getApi()

  return instance({
    url: '/habits',
    method: 'GET',
  })
}
