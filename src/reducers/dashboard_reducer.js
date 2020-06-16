export const ADMIN_INFO = 'ADMIN_INFO';

const dashBoard = (oldState = {
    success: false,
    failed: false,
    action: null,
    data: null
}, action) => {
	switch (action.type) {
		case ADMIN_INFO:
		  return {
			  ...oldState,
			  success: true,
			  failed: false,
			  action: 'FETCH',
			  data: action.adminInfo,
			}
		default:
		  return oldState;
	  }
};

export default dashBoard
