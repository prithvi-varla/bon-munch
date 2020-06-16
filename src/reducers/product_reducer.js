import { PRODUCT_INFO,
  ALL_PRODUCTS,
  PRODUCT_SAVE_RESPONSE,
  PRODUCT_DELETE_RESPONSE,
  PRODUCT_INFO_FAILED, 
  ALL_PRODUCTS_FAILED,
  PRODUCT_SAVE_RESPONSE_FAILED } from '../actions/product_actions';

const productReducer = (oldState = {
    success: false,
    failed: false,
    action: null,
    data: null
}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case PRODUCT_INFO:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'FETCH',
            data: action.productInfo,
          }
      case ALL_PRODUCTS:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'FETCH_ALL',
            data: action.allProducts,
          }
      case PRODUCT_SAVE_RESPONSE:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'SAVE',
            data: action.productSaveResponse,
          }
      case PRODUCT_DELETE_RESPONSE:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'DELETE',
            data: action.productDeleteResponse,
          }
      case PRODUCT_INFO_FAILED:
        return {
            ...oldState,
            success: false,
            failed: true,
            action: 'FETCH',
            data: action.err,
            }
      case ALL_PRODUCTS_FAILED:
        return {
            ...oldState,
            success: false,
            failed: true,
            action: 'FETCH_ALL',
            data: action.err,
            }
      case PRODUCT_SAVE_RESPONSE_FAILED:
        return {
            ...oldState,
            success: false,
            failed: true,
            action: 'SAVE',
            data: action.err,
            }
      default:
        return oldState;
    }
  };


export default productReducer;
