import AuthService from '../utils/AuthService'

const options = {
    auth: {
      redirect:false,
      //redirectUrl: process.env.REACT_APP_AUTH0_REDIRECT_URI,
      responseType: 'code',
      params: {
        scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
      }
    }
}

export const auth = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN, options);

// onEnter callback to validate authentication in private routes
export const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

