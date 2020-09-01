import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'

import { uploadSingleImage } from '../../actions/image_actions';

import {
  CardBody,
  Card,
  CardTitle,
  UncontrolledAlert
} from 'reactstrap';

import HeaderCrumb from '../../layout-components/HeaderCrumb';
import LoadingImage from '../../layout-components/LoadingImage';

import GalleryForm from './Components/index';

const mapStateToProps = (store) => ({
  imageInfo: store.Image
});

const mapDispatchToProps = dispatch => ({
  saveImage: (formData, imageType, imageName, imageDescription, buttonName, buttonUri) => 
  dispatch(uploadSingleImage(formData, imageType, imageName, imageDescription, buttonName, buttonUri)),
});

class AddImage extends Component {

  constructor(props) {

    super(props);
    this.state = {
      imagePreviewUrl: null,
      file: Blob,
      uploadStatus: false,
      fromPage: null,

      failureMesg: false,
      isOpen: true,
      timer: null
    };

    this.handleUploadData = this.handleUploadData.bind(this);
    this.validateUploadData = this.validateUploadData.bind(this);
  }

  handleUploadData (formData, imageName, imageDescription, buttonName, buttonUri) {
    
    let imageType = this.state.fromPage == 'Gallery' ? 'GALLERY' : 'LANDING_PAGE'
    this.props.saveImage(formData, imageType, imageName, imageDescription, buttonName, buttonUri);
    this.setState({
      uploadStatus: true
    });
    setTimeout(() => {
      this.props.history.push('/'+this.state.fromPage, { state: 'success'});
    }, 8000)
  }

  validateUploadData () {
    
    this.setState({
      failureMesg: true
    });
    const timer = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    }, 3000);
    this.setState({ timer: timer });

    this.state.isOpen = true;
  }


  componentWillUnmount() {
		clearInterval(this.state.timer);
	}
  
  render() {
    const { state } = this.props.location;

    if (state != undefined) {
      this.state.fromPage = state.fromPage;
    }

    let failedMessage;
    if (this.state.failureMesg) {
      failedMessage = (<UncontrolledAlert color="danger" isOpen={this.state.isOpen}>
                            Upload file is off the limit (or) file type is not .jpeg/.tiff/.png;
                          </UncontrolledAlert>
                        );
  }


    if (this.state.uploadStatus) {
      return (
        <div>
          <HeaderCrumb title="Add Image" />
          <h1>Please wait .....Image Loading</h1>
          <LoadingImage />
        </div>
      );
    } else if (!this.state.uploadStatus) {
      let initialValues = Object.assign({}, { name: '', password: '' });
        return (
          <Fragment>
            <HeaderCrumb title="Add Image" />
                <Card className="card-box mb-5">
                  <CardBody>
                    {failedMessage}
                    <CardTitle className="font-weight-bold font-size-lg mb-4">
                      Add New Image
                    </CardTitle>
                    <GalleryForm {...this.props} 
                      actionSubmit={this.handleUploadData} 
                      validateUpload={this.validateUploadData} 
                      initialValues = {initialValues} 
                      returnPage ={this.state.fromPage}/>
                  </CardBody>
                </Card>
          </Fragment>
        );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddImage);