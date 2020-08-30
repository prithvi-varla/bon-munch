import React from 'react';
import { Field, reduxForm } from 'redux-form'

import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
  } from 'reactstrap';

import {renderInputField, renderCheckbox, renderSelectField, renderInputCurrencyField, required, email, aol, minValue18} from '../../../../utils/form_validation_util';


class ProductForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            categoryId: '',
            productCategoryMapName:''
        };

        this.handleSubmitForm.bind(this);
      }

    handleCategoryChange(event, s) {
        let targetCategoryId = event.target.value;
        var categories = this.props.categoryInfo.data;
        let categoryValue = '';
        categories.map(function (el) { 
          if (el.categoryId == event.target.value) {
            categoryValue = el.categoryMapName;
          }
        });
        this.setState({
          categoryId : targetCategoryId,
          productCategoryMapName: categoryValue
        });
      }

      componentDidUpdate() {
        if (this.state.categoryId == '') {
          if (this.props.initialValues != null){
            this.setState({
                categoryId : this.props.initialValues.categoryId,
                productCategoryMapName : this.props.initialValues.productCategoryMapName
          });
        }
      }
    }

    handleSubmitForm (formData, dispatch) {

        if(this.state.categoryId) {
            formData.categoryId = this.state.categoryId;
        }
        formData.productCategoryMapName = this.state.productCategoryMapName;
        this.props.actionSubmit(formData);

    }
    
    cancelProduct(event) {
        this.props.history.push('/Products');
    }

render() {

    let {
        handleSubmit, pristine, reset, initialValues, submitting 
    } = this.props;
      
    if (initialValues != null) {
        
        return (
            
            <Form onSubmit={handleSubmit(this.handleSubmitForm.bind(this))}>

                <FormGroup>
                    <Field name="name" type="name" id="name"
                        htmlFor="productName"
                        component={renderInputField} label="Product Name"
                        validate={[ required ]}
                    />
                </FormGroup>
                        
                <FormGroup>
                    <Field name="description" type="name" id="description"
                        htmlFor="description"
                        component={renderInputField} label="Description"
                        validate={[ required ]}
                    />
                </FormGroup>

                <FormGroup>
                    <Field name="categoryId" type="select" id="categorySelect"
                        htmlFor="categorySelect" optionValues = {this.props.optionValues}
                        onChange={event => this.handleCategoryChange(event, this)}
                        component={renderSelectField} label="Select"
                        validate={[ required ]}
                    />
                </FormGroup>

                <Label htmlFor="productPrice">Price</Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Field name="price" type="number" id="price"
                        min={0} max={100} step="1"
                        component={renderInputCurrencyField} label="Price"
                        validate={[ required ]}
                    />
                </InputGroup>

                <br />

                <FormGroup>
                    <Field className="mb-3" type="checkbox" id="active" name="active"
                        component={renderCheckbox} label="Active"
                    />
                </FormGroup>

                <FormGroup>
                    <Field className="mb-3" type="checkbox" id="spicy" name="spicy"
                        component={renderCheckbox} label="Spicy"
                    />
                </FormGroup>

                <FormGroup>
                    <Field className="mb-3" type="checkbox" id="vegetarian" name="vegetarian"
                        component={renderCheckbox} label="Vegetarian ?"
                    />
                </FormGroup>

                <FormGroup>
                    <Field className="mb-3" type="checkbox" id="allowOnlineOrder" name="allowOnlineOrder"
                        component={renderCheckbox} label="Allow Online Order"
                    />
                </FormGroup>

                <Button color="primary" className="mt-1"  type="submit" disabled={submitting}>
                    Save
                </Button>
                <Button size="sm" color="link" className="btn-link-primary" onClick={this.cancelProduct.bind(this)}>
                    Cancel
                </Button>
            </Form>

        )
    } else {
        return null;
    }

    }
}

export default reduxForm({
  form: 'productForm' // a unique identifier for this form
})(ProductForm)