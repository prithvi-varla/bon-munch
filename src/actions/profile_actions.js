import * as ProfileInfo from '../utils/profile_util';


export const USER_PROFILE_INFO = 'USER_PROFILE_INFO';
export const USER_PROFILE_UPDATE_RESPONSE = 'USER_PROFILE_UPDATE_RESPONSE';
export const USER_PROFILE_INFO_FAILED = 'USER_PROFILE_INFO_FAILED';
export const USER_PROFILE_UPDATE_RESPONSE_FAILED = 'USER_PROFILE_UPDATE_RESPONSE_FAILED';

export const receiveUserProfileInfo = userProfileInfo => {
  return ({
    type: USER_PROFILE_INFO,
    userProfileInfo
  });
};

export const userProfileUpdateResponse = userProfileUpdateResponse => {
  return ({
    type: USER_PROFILE_UPDATE_RESPONSE,
    userProfileUpdateResponse
  });
};

export const fetchUserProfile = () => dispatch => {
  return (
    ProfileInfo.fetchUserProfile()
  .then((userProfileInfo) => dispatch(receiveUserProfileInfo(userProfileInfo))))
  .catch((err) => dispatch({ type: USER_PROFILE_INFO_FAILED, err }));
};

export const userProfileUpdate = (data, isPasswordChanged) => dispatch => {
  return (
    ProfileInfo.updateUserProfile(data, isPasswordChanged)
  .then((userProfileUpdateResponse) => dispatch(userProfileUpdateResponse(userProfileUpdateResponse))))
  .catch((err) => dispatch({ type: USER_PROFILE_UPDATE_RESPONSE_FAILED,  err }));
};