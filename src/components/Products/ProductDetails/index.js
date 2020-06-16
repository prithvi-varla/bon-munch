import React, { Fragment, Component } from 'react';

import {
  CardBody,
  Card,
  CardTitle,
  UncontrolledAlert
} from 'reactstrap';

import { connect } from 'react-redux'

import HeaderCrumb from '../../../layout-components/HeaderCrumb';

import { productSave } from '../../../actions/product_actions';
import { fetchProduct } from '../../../actions/product_actions';
import { fetchAllCategories } from '../../../actions/category_actions';
import LoadingImage from '../../../layout-components/LoadingImage';

import ProductForm from './Components/index';

const mapStateToProps = (store) => ({
  initialValues: store.Product.data,
  productInfo: store.Product,
  categoryInfo: store.Categories
});

const mapDispatchToProps = dispatch => ({
  saveProduct: (data, actionName) => dispatch(productSave(data, actionName)),
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  fetchAllCategories: (categoryType) => dispatch(fetchAllCategories(categoryType))
});


class ProductDetails extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      uploadStatus: false
  };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidMount() {
    if (this.state.productId != null) {
      this.props.fetchProduct(this.state.productId);
    }
    this.props.fetchAllCategories("ALL_CATEGORIES");
  }


  handleSubmitForm (formData, dispatch) {
    var actionName = this.state.productId != null ? 'UPDATE' : 'CREATE';
    this.props.saveProduct(formData, actionName);

    this.setState({
      uploadStatus: true
    });
    setTimeout(() => {
      this.props.history.push('/Products', { state: 'success'});
    }, 3000)

  }

  render() {

    let optionValues = null;
    let initialValues = null;

    if (this.state.uploadStatus) {
      return (
        <div>
          <HeaderCrumb title="Products" />
          <LoadingImage />
        </div>
      );
    } else {
      const { state } = this.props.location;

      if (state != undefined) {
        this.state.productId = state.productId;
      }
    }

if (this.props.productInfo != null && this.props.productInfo.action != null && this.props.productInfo.action == 'FETCH') {
  initialValues = this.props.initialValues;
}  else {
  if (this.state.productId != undefined) {
    return null;
  }
  initialValues = Object.assign({}, { name: '', password: '' });
}
   //if (this.props.productInfo != null && this.props.productInfo.action != null && this.props.productInfo.action == 'FETCH') {

    if (this.props.categoryInfo.data != null ) {

        let tempList = [];
        this.props.categoryInfo.data.forEach(({ categoryId, categoryMapName }) => tempList.push({ categoryId, categoryMapName }));

        let filterList = tempList.filter( (ele, ind) => ind === tempList.findIndex( elem => elem.categoryMapName === ele.categoryMapName));

        // sort list
        let sortList = filterList
          .sort((a, b) => {
            if (a.categoryMapName < b.categoryMapName) return -1;
            else if (a.categoryMapName > b.categoryMapName) return 1;
            return 0;
          });

          let keyIncrement = 1;
          optionValues = sortList.map(item => {
            return <option key= {keyIncrement++} value={item.categoryId}>{item.categoryMapName}</option>;
          });

      }

    return (
      <Fragment>
        <HeaderCrumb title="New Product" />
        <Card className="card-box mb-5">
              <CardBody>
                
                  <CardTitle className="font-weight-bold font-size-lg mb-4">
                    New Product
                  </CardTitle>
                  <ProductForm {...this.props} optionValues={optionValues} actionSubmit={this.handleSubmitForm} initialValues = {initialValues}/>

                </CardBody >
              </Card>
      </Fragment>
    )
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);