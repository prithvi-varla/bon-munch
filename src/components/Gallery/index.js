import React, { Fragment,useState, Component } from 'react'
import { connect } from 'react-redux'

import LoadingImage from '../../layout-components/LoadingImage'
import HeaderCrumb from '../../layout-components/HeaderCrumb';
import { fetchAllImages, deleteImage } from '../../actions/image_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Card,
  UncontrolledAlert
} from 'reactstrap';

const mapStateToProps = (store) => ({
  imageInfo: store.Image
});

const mapDispatchToProps = dispatch => ({
  fetchAllImages: (imageType) => dispatch(fetchAllImages(imageType)),
  deleteImage: (id, imageType) => dispatch(deleteImage(id, imageType))
});

class Gallery extends React.Component {
  
  constructor(props) {

    super(props);
    this.state = {
      loading: false,
      products: [],
      pageNumber: 0,
      totalPages: 0,
      totalProducts: 0,
      modal: false,

      isOpen: false,
      timer: null

    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllImages("GALLERY");
    // setState to true so that loading will show
    //this.setState({ loading: true });

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

  nextPage = () => {
    this.setState(
      {
        pageNumber: this.state.pageNumber + 1
      },
      () => {
        this.getProucts();
      }
    );
  };


  onChange = () => {
    this.setState(
      {
        pageNumber: this.state.pageNumber + 1
      },
      () => {
        this.getProucts();
      }
    );
  };

  handleOpenModal () {
    this.setState({ modal: !this.state.modal });
  }

  handleCloseModal () {
    this.setState({ modal: false });
  }

  addImage () {
    this.props.history.push('/AddImage', { fromPage: 'Gallery'});
  }

  isPageRefreshed() {
    return window.performance && performance.navigation.type === 1;
  }

  deleteButton(event) {
    this.props.deleteImage(event.currentTarget.id, "GALLERY");
    this.handleCloseModal();
    const timer = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    }, 3000);
    this.setState({ timer: timer });

    this.state.isOpen = true;
  }

  render() {
    const { images } = this.props.imageInfo;
    const { state } = this.props.location;
    let successMessage, displayImages, displayAddImage;

    if (images == undefined) {
      return (
        <div>
          <HeaderCrumb title="Gallery" />
          <LoadingImage />
        </div>
      );
    }

    if (state != undefined) {
        successMessage = (<UncontrolledAlert color="success" isOpen={this.state.isOpen}>
                              Gallery image is successfully saved/deleted.
                            </UncontrolledAlert>
                          );
    }

    let renderProducts = images.map(item => {
      return (
        <div className="product-item" key={item.id}>
          <div>
            {<img src={item.srcUrl} />}
            <p>{item.name}</p>
          </div>
          <div className="image-actions">
            <Button
              id= {item.id}
              className="remove"
              onClick={this.handleOpenModal}
            >
              &times;
            </Button>
            <Modal zIndex={2000} centered isOpen={this.state.modal} toggle={this.handleOpenModal}>
            <ModalHeader toggle={this.handleOpenModal}>Delete Warning</ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to delete the image ?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={this.handleOpenModal}>
                Close
              </Button>{' '}
              <Button id= {item.id} color="primary" className="ml-auto" onClick={this.deleteButton.bind(this)}>
                DELETE
              </Button>
            </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    });

    if (images.length > 0) {

      displayImages = (
        
        <Card className="card-box mb-4 pt-4 pb-2">
            <div className="app-wrapper-image">
              <div className="products-container">
                {images.length > 0 && renderProducts}
              </div>
            </div>
          </Card>
      
          );
    }

    if (images.length < 12) {

      displayAddImage = (

        <Card className="card-box mb-4 pt-4 pb-2">
          <div className="app-wrapper-image">
            <div className="products-container add-item">
              <div className="product-item" key="123">
                <p>Add Item</p>
                <label htmlFor='single'>  
                <FontAwesomeIcon
                            icon={['fa', 'plus-circle']}
                            className="font-size-xxxl symbol-style"
                            onClick={this.addImage}
                          />
                </label>
              </div>
            </div>
          </div>
        </Card>

      );
    }


    return (
      <Fragment>
        <HeaderCrumb title="Gallery" />
          {successMessage}
          
          {displayAddImage}

          <div className="image-divider my-4" />

          {displayImages}
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
