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


class SubCategoryForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            parentCategoryId: ''
        };

        this.handleSubmitForm.bind(this);
      }

    handleCategoryChange(event, s) {
        let targetCategoryId = event.target.value;
        this.setState({
            parentCategoryId : targetCategoryId
        });
      }

      componentDidUpdate() {
        if (this.state.parentCategoryId == '') {
          if (this.props.initialValues != null){
            this.setState({
                parentCategoryId : this.props.initialValues.parentCategoryId
          });
        }
      }
    }

    handleSubmitForm (formData, dispatch) {

        formData.parentCategoryId = this.state.parentCategoryId;
        this.props.actionSubmit(formData);

    }
    
    cancelProduct(event) {
        this.props.history.push('/SubCategories');
    }

render() {

    let {
        handleSubmit, pristine, reset, initialValues, submitting 
    } = this.props;
      
    if (initialValues != null) {
        
        return (
            
            <Form onSubmit={handleSubmit(this.handleSubmitForm.bind(this))}>

                <FormGroup>
                    <Field name="categoryName" type="name" id="categoryName"
                        htmlFor="categoryName"
                        component={renderInputField} label="Category Name"
                        validate={[ required ]}
                    />
                </FormGroup>
                        
                <FormGroup>
                    <Field name="categoryDescription" type="name" id="categoryDescription"
                        htmlFor="categoryDescription"
                        component={renderInputField} label="Category Description"
                        validate={[ required ]}
                    />
                </FormGroup>

                <FormGroup>
                    <Field name="parentCategoryId" type="select" id="categorySelect"
                        htmlFor="categorySelect" optionValues = {this.props.optionValues}
                        onChange={event => this.handleCategoryChange(event, this)}
                        component={renderSelectField} label="Select"
                        validate={[ required ]}
                    />
                </FormGroup>

                <Label htmlFor="sortOrder">Sort order</Label>
                <InputGroup>
                    <Field name="sortOrder" type="number" id="sortOrder"
                        min={0} max={100} step="1"
                        component={renderInputCurrencyField} label="Sort order"
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
  form: 'subCategoryForm' // a unique identifier for this form
})(SubCategoryForm)