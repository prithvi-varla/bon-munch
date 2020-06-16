import { SETTING_INFO,
     SETTING_SAVE_RESPONSE,
     SETTING_INFO_FAILED, 
     SETTING_SAVE_RESPONSE_FAILED } from '../actions/setting_actions';

const settingReducer = (oldState = {
    success: false,
    failed: false,
    action: null,
    data: null
}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case SETTING_INFO:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'FETCH',
            userData: action.settingInfo,
          }
      case SETTING_SAVE_RESPONSE:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'SAVE',
            userData: action.settingSaveResponse,
          }
      case SETTING_INFO_FAILED:
        return {
            ...oldState,
            success: false,
            failed: true,
            action: 'FETCH',
            userData: action.err,
            }
      case SETTING_SAVE_RESPONSE_FAILED:
        return {
            ...oldState,
            success: false,
            failed: true,
            action: 'SAVE',
            userData: action.err,
            }
      default:
        return oldState;
    }
  };


export default settingReducer;
