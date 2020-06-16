import * as SettingInfo from '../utils/setting_util';


export const SETTING_INFO = 'SETTING_INFO';
export const SETTING_SAVE_RESPONSE = 'SETTING_SAVE_RESPONSE';
export const SETTING_INFO_FAILED = 'SETTING_INFO_FAILED';
export const SETTING_SAVE_RESPONSE_FAILED = 'SETTING_SAVE_RESPONSE_FAILED';


export const receiveSettingInfo = settingInfo => {
  return ({
    type: SETTING_INFO,
    settingInfo
  });
};

export const settingSaveResponse = settingSaveResponse => {
  return ({
    type: SETTING_SAVE_RESPONSE,
    settingSaveResponse
  });
};

export const fetchSetting = () => dispatch => {
  return (
    SettingInfo.fetchSiteSetting()
  .then((settingInfo) => dispatch(receiveSettingInfo(settingInfo))))
  .catch((err) => dispatch({ type: SETTING_INFO_FAILED, err }));
};

export const settingSave = (data) => dispatch => {
  return (
    SettingInfo.uploadSiteSetting(data)
  .then((settingSaveResponse) => dispatch(settingSaveResponse(settingSaveResponse))))
  .catch((err) => dispatch({ type: SETTING_SAVE_RESPONSE_FAILED,  err }));
};