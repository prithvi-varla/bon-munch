import React from 'react';
import { Field, reduxForm } from 'redux-form'

import {
    Form,
    Label,
    FormGroup,
    Input,
    Button
  } from 'reactstrap';

import {renderInputField, required, email, aol, minValue18} from '../../../utils/form_validation_util';


class ProfileForm extends React.Component {
    

render() {

    let {
        handleSubmit, pristine, reset, initialValues, submitting 
    } = this.props;
        
  return (

    //<Form onSubmit={handleSubmit}>
      
    <Form onSubmit={handleSubmit(this.props.actionSubmit)}>
        <FormGroup>
            <Field name="emailAddress" type="email" id="email"
                htmlFor="email"
                component={renderInputField} label="Email"
                validate={[ required, email ]}
                warn={aol}
            />
        </FormGroup>

        <FormGroup>
            <Field name="password" type="password" id="password"
                htmlFor="password"
                component={renderInputField} label="Password"
                validate={[ required, minValue18 ]}
            />
        </FormGroup>

        <FormGroup>
            <Field name="firstName" type="firstName" id="firstName"
                htmlFor="firstName"
                component={renderInputField} label="First Name"
                validate={[ required, minValue18 ]}
            />
        </FormGroup>

        <FormGroup>
            <Field name="lastName" type="lastName" id="lastName"
                htmlFor="lastName"
                component={renderInputField} label="Last Name"
                validate={[ required, minValue18 ]}
            />
        </FormGroup>

        <FormGroup>
            <Label htmlFor="exampleSelectMulti">Select Multiple</Label>
            <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
                >
                <option>Administrator</option>
                <option>User</option>
            </Input>
        </FormGroup>

        <FormGroup>
        <Label htmlFor="exampleText">Comments</Label>
        <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button color="primary" className="mt-1"  type="submit" disabled={submitting}>
            Submit
        </Button>
    </Form>

  )
}
}

export default reduxForm({
  form: 'profileForm' // a unique identifier for this form
})(ProfileForm)