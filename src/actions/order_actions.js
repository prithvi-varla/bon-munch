import * as Orders from '../utils/orders_util';


export const ALL_ORDERS = 'ALL_ORDERS';


export const receiveAllOrders = allOrders => {
    return ({
      type: ALL_ORDERS,
      allOrders
    });
  };

export const fetchAllOrders = () => dispatch => {
    return (
        Orders.fetchAllOrders()
        .then((allOrders) => dispatch(receiveAllOrders(allOrders)))
    );
  };