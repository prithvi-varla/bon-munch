import { 
    ALL_ORDERS } from '../actions/order_actions';

const orderReducer = (oldState = {
    success: false,
    failed: false,
    action: null,
    data: null
}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case ALL_ORDERS:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'FETCH',
            data: action.allOrders,
          }
      default:
        return oldState;
    }
  };


export default orderReducer;
