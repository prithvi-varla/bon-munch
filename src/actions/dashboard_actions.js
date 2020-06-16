import * as AdminInfo from '../utils/admin_util';

export const ADMIN_INFO = 'ADMIN_INFO';

export const receiveAdminInfo = adminInfo => {
  return ({
    type: ADMIN_INFO,
    adminInfo
  });
};

export const fetchAdminInfo = () => dispatch => {
  return (
    AdminInfo.fetchAdminInfo()
      .then((adminInfo) => dispatch(receiveAdminInfo(adminInfo)))
  );
};

