import * as LoginInfo from '../utils/login_util';

export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const IS_NOT_AUTHENTICATED = 'IS_NOT_AUTHENTICATED';

export const doLogin = (username, password) => dispatch => {
  if (username && password) {
    const authRequest = Object.assign({}, { username: username, password: password });
    return (
      LoginInfo.fetchLoginAction(authRequest)
        .then((LoginSaveResponse) => dispatch(loginSaveResponse(LoginSaveResponse)))
        //.then((response) => {
       //   dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
       // })
        .catch((err) => dispatch({ type: "LOGIN_FAILED", payload: err }))
    );
  }
  return {
    type: "LOGIN_EMPTY",
    payload: {
      message: "Empty username or password.",
    }
  }
}


export const loginSaveResponse = loginSaveResponse => {

          localStorage.removeItem("token")
          localStorage.setItem("token", loginSaveResponse.token);
  return ({
    type: "LOGIN_SUCCESS",
    payload: loginSaveResponse.token
  });
};


export function doLogout() {
  localStorage.removeItem("token")
  return {
    type: "IS_NOT_AUTHENTICATED",
    payload: ''
  }
}