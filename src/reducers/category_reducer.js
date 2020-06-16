import { CATEGORY_INFO,
    ALL_CATEGORIES,
    CATEGORY_SAVE_RESPONSE,
    CATEGORY_DELETE_RESPONSE,
    CATEGORY_INFO_FAILED, 
    ALL_CATEGORIES_FAILED,
    CATEGORY_SAVE_RESPONSE_FAILED } from '../actions/category_actions';

const categoryReducer = (oldState = {
    success: false,
    failed: false,
    action: null,
    data: null
}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case CATEGORY_INFO:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'FETCH',
            data: action.categoryInfo,
          }
      case ALL_CATEGORIES:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'FETCH_ALL',
            data: action.allCategories,
          }
      case CATEGORY_SAVE_RESPONSE:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'SAVE',
            data: action.categorySaveResponse,
          }
      case CATEGORY_DELETE_RESPONSE:
        return {
            ...oldState,
            success: true,
            failed: false,
            action: 'DELETE',
            data: action.categoryDeleteResponse,
          }
      case CATEGORY_INFO_FAILED:
        return {
            ...oldState,
            success: false,
            failed: true,
            action: 'FETCH',
            data: action.err,
            }
      case ALL_CATEGORIES_FAILED:
        return {
            ...oldState,
            success: false,
            failed: true,
            action: 'FETCH_ALL',
            data: action.err,
            }
      case CATEGORY_SAVE_RESPONSE_FAILED:
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


export default categoryReducer;
