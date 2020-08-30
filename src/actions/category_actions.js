import * as CategoryInfo from '../utils/category_util';

export const CATEGORY_INFO = 'CATEGORY_INFO';
export const ALL_CATEGORIES = 'ALL_CATEGORIES';
export const CATEGORY_SAVE_RESPONSE = 'CATEGORY_SAVE_RESPONSE';
export const CATEGORY_DELETE_RESPONSE = 'CATEGORY_DELETE_RESPONSE';
export const CATEGORY_INFO_FAILED = 'CATEGORY_INFO_FAILED';
export const ALL_CATEGORIES_FAILED = 'ALL_CATEGORIES_FAILED';
export const CATEGORY_SAVE_RESPONSE_FAILED = 'CATEGORY_SAVE_RESPONSE_FAILED';


export const receiveCategoryInfo = categoryInfo => {
  return ({
    type: CATEGORY_INFO,
    categoryInfo
  });
};

export const receiveAllCategories = allCategories => {
  return ({
    type: ALL_CATEGORIES,
    allCategories
  });
};

export const categorySaveResponse = categorySaveResponse => {
  return ({
    type: CATEGORY_SAVE_RESPONSE,
    categorySaveResponse
  });
};

export const categoryDeleteResponse = categoryDeleteResponse => {
  return ({
    type: CATEGORY_DELETE_RESPONSE,
     categoryDeleteResponse
  });
};

export const fetchCategoryById = (categoryId) => dispatch => {
  return (
    CategoryInfo.fetchCategoryById(categoryId)
  .then((categoryInfo) => dispatch(receiveCategoryInfo(categoryInfo))))
  .catch((err) => dispatch({ type: CATEGORY_INFO_FAILED, err }));
};

export const fetchAllCategories = (categoryType) => dispatch => {
    return (
        CategoryInfo.fetchAllCategories(categoryType)
    .then((allCategories) => dispatch(receiveAllCategories(allCategories))))
    .catch((err) => dispatch({ type: ALL_CATEGORIES_FAILED, err }));
};

export const saveCategory = (data, actionName) => dispatch => {
    return (
        CategoryInfo.createCategory(data, actionName)
    .then((response) => dispatch(categorySaveResponse(response))))
    .catch((err) => dispatch({ type: CATEGORY_SAVE_RESPONSE_FAILED,  err }));
};

export const deleteCategory = (id, type) => dispatch => {
  return (
    CategoryInfo.deleteCategory(id)
  .then((deleteReponse)  => dispatch(fetchAllCategories(type))));
};