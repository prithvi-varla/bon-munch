import React from 'react';
import { Field, reduxForm } from 'redux-form'

import {
    Form,
    FormGroup,
    Button
  } from 'reactstrap';

import {renderCheckbox, required, email, aol, minValue18} from '../../../utils/form_validation_util';


class InitialSetupForm extends React.Component {

render() {

    let {
        handleSubmit, pristine, reset, initialValues, submitting 
    } = this.props;
        
  return (
      
    <Form onSubmit={handleSubmit(this.props.actionSubmit)}>
        <FormGroup>
            <Field className="mb-3" type="checkbox" id="activeReviewPage" name="activeReviewPage"
                component={renderCheckbox} label="Activate Review Page"
            />
        </FormGroup>

        <FormGroup>
            <Field className="mb-3" type="checkbox" id="activeOrders" name="activeOrders"
                component={renderCheckbox} label="Activate Orders Page"
            />
        </FormGroup>

        <FormGroup>
            <Field className="mb-3" type="checkbox" id="activeGallery" name="activeGallery"
                component={renderCheckbox} label="Activate Gallery Page"
            />
        </FormGroup>

        <Button color="primary" className="mt-1"  type="submit" disabled={submitting}>
            Save
        </Button>
    </Form>

  )
}
}

export default reduxForm({
  form: 'initialSetupForm' // a unique identifier for this form
})(InitialSetupForm)