import * as ProductUtil from '../utils/product_util';

export const PRODUCT_INFO = 'PRODUCT_INFO';
export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const PRODUCT_SAVE_RESPONSE = 'PRODUCT_SAVE_RESPONSE';
export const PRODUCT_DELETE_RESPONSE = 'PRODUCT_DELETE_RESPONSE';
export const PRODUCT_INFO_FAILED = 'PRODUCT_INFO_FAILED';
export const ALL_PRODUCTS_FAILED = 'ALL_PRODUCTS_FAILED';
export const PRODUCT_SAVE_RESPONSE_FAILED = 'PRODUCT_SAVE_RESPONSE_FAILED';

export const receiveProductInfo = productInfo => {
  return ({
    type: PRODUCT_INFO,
    productInfo
  });
};

export const receiveAllProducts = allProducts => {
  return ({
    type: ALL_PRODUCTS,
    allProducts
  });
};

export const productSaveResponse = productSaveResponse => {
  return ({
    type: PRODUCT_SAVE_RESPONSE,
    productSaveResponse
  });
};

export const productDeleteResponse = productDeleteResponse => {
  return ({
    type: PRODUCT_DELETE_RESPONSE,
    productDeleteResponse
  });
};

export const fetchProduct = (productId) => dispatch => {
  return (
    ProductUtil.fetchProduct(productId)
  .then((productInfo) => dispatch(receiveProductInfo(productInfo))))
  .catch((err) => dispatch({ type: PRODUCT_INFO_FAILED, err }));
};

export const fetchAllProducts = () => dispatch => {
    return (
      ProductUtil.fetchAllProducts()
    .then((allProducts) => dispatch(receiveAllProducts(allProducts))))
    .catch((err) => dispatch({ type: ALL_PRODUCTS_FAILED, err }));
};

export const productSave = (data, actionName) => dispatch => {
    return (
      ProductUtil.createProduct(data, actionName)
    .then((ProductSaveResponse) => dispatch(productSaveResponse(ProductSaveResponse))))
    .catch((err) => dispatch({ type: PRODUCT_SAVE_RESPONSE_FAILED,  err }));
};

export const productDelete = (id) => dispatch => {
  return (
    ProductUtil.deleteProduct(id)
  .then((deleteReponse)  => dispatch(fetchAllProducts())));
};