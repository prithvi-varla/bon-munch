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

import {renderInputField, renderCheckbox, renderSelectField, renderInputCurrencyField, required, email, aol, minValue18} from '../../../utils/form_validation_util';



const fileSize = "5000000"; // 5MB
const fileType = ["image/jpeg", "image/tiff", "image/png"];

class GalleryForm extends React.Component {

    constructor(props) {

        super(props);

        this.handleSubmitForm.bind(this);
    }

    handleSubmitForm (formData, dispatch) {

        const saveFormData = new FormData();
        var uploadFile = this.uploadInput.files[0];
        saveFormData.append('files', uploadFile);
  
        if (this.uploadInput.files.length != 0 && uploadFile.size < fileSize && fileType.includes(uploadFile.type)) {
            this.props.actionSubmit(saveFormData, formData.imageName, formData.imageDescription, formData.buttonName, formData.buttonUri);
        } else {
            this.props.validateUpload();
        }
        
    }

    cancelAddImage(event) {
        this.props.history.push('/'+ this.props.returnPage);
    }

    render() {

        let {
            handleSubmit, pristine, reset, initialValues, submitting 
        } = this.props;
        
        if (initialValues != null) {
            
            return (
                
                <Form onSubmit={handleSubmit(this.handleSubmitForm.bind(this))}>

                    <FormGroup>
                        <Field name="imageName" type="name" id="imageName"
                        htmlFor="imageName"
                        component={renderInputField} label="Image Name"
                        validate={[ required ]}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Field name="imageDescription" type="name" id="imageDescription"
                        htmlFor="imageDescription"
                        component={renderInputField} label="Image Description"
                        validate={[ required ]}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Field name="buttonName" type="name" id="buttonName"
                        htmlFor="buttonName"
                        component={renderInputField} label="Button Name"
                        validate={[ required ]}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Field name="buttonUri" type="name" id="buttonUri"
                        htmlFor="buttonUri"
                        component={renderInputField} label="Button Uri"
                        validate={[ required ]}
                        />
                        <span>(ex: /menu, /delivery, url's)</span>
                    </FormGroup>

                    <FormGroup>
                        <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                        <span>(only files .jpeg/.tiff/.png are supported.)</span>
                    </FormGroup>
                    <Button color="primary" className="mt-1"  type="submit" disabled={submitting}>
                        Save
                    </Button>
                    <Button size="sm" color="link" className="btn-link-primary" onClick={this.cancelAddImage.bind(this)}>
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
  form: 'galleryForm' // a unique identifier for this form
})(GalleryForm)