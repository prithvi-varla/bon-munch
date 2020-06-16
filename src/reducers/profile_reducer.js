import { USER_PROFILE_INFO,
    USER_PROFILE_UPDATE_RESPONSE,
    USER_PROFILE_INFO_FAILED, 
    USER_PROFILE_UPDATE_RESPONSE_FAILED } from '../actions/profile_actions';

const profileReducer = (oldState = {
   success: false,
   failed: false,
   action: null,
   data: null
}, action) => {
   Object.freeze(oldState);
   switch (action.type) {
     case USER_PROFILE_INFO:
       return {
           ...oldState,
           success: true,
           failed: false,
           action: 'FETCH',
           userData: action.userProfileInfo,
         }
     case USER_PROFILE_UPDATE_RESPONSE:
       return {
           ...oldState,
           success: true,
           failed: false,
           action: 'UPDATE',
           userData: action.userProfileUpdateResponse,
         }
     case USER_PROFILE_INFO_FAILED:
       return {
           ...oldState,
           success: false,
           failed: true,
           action: 'FETCH_FAILED',
           userData: action.err,
           }
     case USER_PROFILE_UPDATE_RESPONSE_FAILED:
       return {
           ...oldState,
           success: false,
           failed: true,
           action: 'UPDATE_FAILED',
           userData: action.err,
           }
     default:
       return oldState;
   }
 };


export default profileReducer;
