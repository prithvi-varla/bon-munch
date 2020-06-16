




import React, { Fragment, Component } from 'react';

import {
  CardBody,
  Card,
  CardTitle
} from 'reactstrap';

import { connect } from 'react-redux'

import HeaderCrumb from '../../../layout-components/HeaderCrumb';

import { fetchCategoryById } from '../../../actions/category_actions';
import { saveCategory } from '../../../actions/category_actions';
import { fetchAllCategories } from '../../../actions/category_actions';

import LoadingImage from '../../../layout-components/LoadingImage';

import SubCategoryForm from './Components/index';

const mapStateToProps = (store) => ({
  initialValues: store.Categories.data,
  categoryInfo: store.Categories
});

const mapDispatchToProps = dispatch => ({
  saveCategory: (data, actionName) => dispatch(saveCategory(data, actionName)),
  fetchCategory: (categoryId) => dispatch(fetchCategoryById(categoryId))
});


class CategoryDetails extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
        categoryName: '',
        sortOrder: 0,
        categoryDescription: '',
        categoryId: null,

        uploadStatus: false
  };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidMount() {
    if (this.state.categoryId != null) {
      this.props.fetchCategory(this.state.categoryId);
    }
  }

  handleSubmitForm (formData, dispatch) {
    var actionName = this.state.categoryId != null ? 'UPDATE' : 'CREATE';
    this.props.saveCategory(formData, actionName);

    this.setState({
      uploadStatus: true
    });
    setTimeout(() => {
      this.props.history.push('/Categories', { state: 'success'});
    }, 2000)

  }

  render() {

    let initialValues = null;

    if (this.state.uploadStatus) {
      return (
        <div>
          <HeaderCrumb title="Category Details" />
          <LoadingImage />
        </div>
      );
    } else {
      const { state } = this.props.location;

      if (state != undefined) {
        this.state.categoryId = state.categoryId;
      }
    }

    if (this.props.categoryInfo != null && this.props.categoryInfo.action != null && this.props.categoryInfo.action == 'FETCH') {
      initialValues = this.props.initialValues;
    }  else {
      if (this.state.categoryId != undefined) {
        return null;
      }
      initialValues = Object.assign({}, { name: '', password: '' });
    }

    return (
      <Fragment>
        <HeaderCrumb title="New Category" />
        <Card className="card-box mb-5">
              <CardBody>
                  <CardTitle className="font-weight-bold font-size-lg mb-4">
                    New Category
                  </CardTitle>
                  <SubCategoryForm {...this.props} optionValues={this.state.optionValues} actionSubmit={this.handleSubmitForm} initialValues = {initialValues}/>
                </CardBody >
              </Card>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
