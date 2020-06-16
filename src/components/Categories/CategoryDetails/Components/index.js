import React from 'react';
import { Field, reduxForm } from 'redux-form'

import {
    Form,
    Label,
    FormGroup,
    Button,
    InputGroup
  } from 'reactstrap';

import {renderInputField, renderCheckbox, renderSelectField, renderInputCurrencyField, required, email, aol, minValue18} from '../../../../utils/form_validation_util';


class CategoryForm extends React.Component {

    constructor(props) {

        super(props);

        this.handleSubmitForm.bind(this);
    }

    handleSubmitForm (formData, dispatch) {
        this.props.actionSubmit(formData);
    }

    cancelProduct(event) {
        this.props.history.push('/Categories');
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
  form: 'categoryForm' // a unique identifier for this form
})(CategoryForm)