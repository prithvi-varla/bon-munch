import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux'

import { fetchAllProducts } from '../../actions/product_actions';
import { productSave } from '../../actions/product_actions';
import { productDelete } from '../../actions/product_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import productImage from '../../assets/images/avatars/no_image.jpg';

import {
  Table,
  CardBody,
  Card,
  Badge,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  UncontrolledTooltip,
  DropdownToggle,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledAlert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import LoadingImage from '../../layout-components/LoadingImage'
import HeaderCrumb from '../../layout-components/HeaderCrumb';

const mapStateToProps = (store) => ({
  productInfo: store.Product,
  categoryInfo: store.Categories
});

const mapDispatchToProps = dispatch => ({
  deleteProduct: (id) => dispatch(productDelete(id)),
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  fetchAllCategories: (categoryType) => dispatch(fetchAllCategories(categoryType))

});

class Products extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      activeReviewPage: null,
      activeOrdersPage: null,
      activeGalleryPage: null,
      action: null,
      modal: false,
      
      isOpen: false,
      timer: null
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.fetchAllCategories("ALL_CATEGORIES");
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

  deleteButton(event) {
    this.props.deleteProduct(event.currentTarget.id);
    this.handleCloseModal();
    const timer = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    }, 3000);
    this.setState({ timer: timer });
    this.state.isOpen = true;
  }

  editExistingProduct(event) {
    this.props.history.push('/Products/NewEntry', { productId: event.currentTarget.id});
  }

  addNewProduct(event) {
    var test ='test';
    this.props.history.push('/Products/NewEntry');
  }

  handleOpenModal () {
    this.setState({ modal: !this.state.modal });
  }

  handleCloseModal () {
    this.setState({ modal: false });
  }
  
  render() {

    const { state } = this.props.location;

    if (this.props.productInfo.data  == undefined) {
      return (
        <div>
          <HeaderCrumb title="Product" />
          <LoadingImage />
        </div>
      );
    }

    let successMessage;
    if (state != undefined) {
        successMessage = (<UncontrolledAlert color="success" isOpen={this.state.isOpen}>
                              Product information is successfully saved.
                            </UncontrolledAlert>
                          );
    }

    
    let table = { header: '', body: '' }

    var headerNames = ['#', '',  'Product Name', 'Category', 'Sub Category', 'Price', 'Actions'];
    var dataValues = this.props.productInfo.data != undefined ? this.props.productInfo.data : [];

    table.header = headerNames.map((val, k) => {
      return (
        <th key={`thead-${k}`} className="text-center">{val}</th>
      )
    })

    if (dataValues.length > 0 && this.props.categoryInfo.data != undefined) {

      table.body = dataValues.map((val, k) => {
        let categoryName, subCategoryName;
        if (val.categoryId != null) {
          const element = this.props.categoryInfo.data.find(category => category.categoryId == val.categoryId);
          if (element != null) {
            const parentCategoryId = element.parentCategoryId;
            if (parentCategoryId  != null) {
              const categoryObject = this.props.categoryInfo.data.find(category => category.categoryId == parentCategoryId);
              categoryName = categoryObject != null? categoryObject.categoryName : null ;
              const subCategoryObject = this.props.categoryInfo.data.find(category => category.categoryId == val.categoryId);
              subCategoryName = subCategoryObject != null? subCategoryObject.categoryName : null;
            } else {
              const categoryObject = this.props.categoryInfo.data.find(category => category.categoryId == val.categoryId);
              categoryName = categoryObject != null? categoryObject.categoryName : null ;
            }
          }

        }

        return (
          <tr key={`thead-${k}`}>
          <td className="text-center">{k+1}</td>
          <td className="text-center">
          <div className="d-block d-44 rounded-sm overflow-hidden">
              <img src={productImage} className="img-fluid" alt="..." />
            </div>
          </td>
            <td>
              <div className="d-flex align-items-center">
                <div>
                  <a
                    onClick={e => e.preventDefault()}
                    className="font-weight-bold text-black"
                    title="...">
                    {val.name}
                  </a>
                  <span className="text-black-50 d-block">
                    {val.description}
                  </span>
                </div>
              </div>
            </td>

            <td className="text-center">
              <Badge color="info" className="h-auto py-0 px-3">
                {categoryName}
              </Badge>
            </td>

            <td className="text-center">
              <Badge color="success" className="h-auto py-0 px-3">
                {subCategoryName}
              </Badge>
            </td>

            <td className="text-center"><span dangerouslySetInnerHTML={{ __html: '&dollar;' }} />{val.price}</td>
            
            <td className="text-center">
              <UncontrolledDropdown>
              <DropdownToggle caret
              color="primary"
              className="px-2 py-0 caret">
                Actions
              </DropdownToggle>
              <DropdownMenu 
              right
              className="dropdown-menu-xl overflow-hidden p-0">
              <DropdownItem
                id= {val.productId}
                onClick={this.editExistingProduct.bind(this)}
                >
                <span>View details</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                id= {val.productId}
                onClick={this.handleOpenModal}
                className="text-danger mx-3">
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </div>
                <span>Delete</span>
                </DropdownItem>
              </DropdownMenu>
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
                  <Button id= {val.productId} color="primary" className="ml-auto" onClick={this.deleteButton.bind(this)}>
                    DELETE
                  </Button>
                </ModalFooter>
              </Modal>
              </UncontrolledDropdown>
                <UncontrolledDropdown>
                  <DropdownMenu
                    right
                    className="dropdown-menu-xl overflow-hidden p-0">
                    <Nav
                      pills
                      className="nav-primary flex-column pt-2 pb-3">
                      <NavItem className="px-3">
                        <NavLink
                          onClick={e => e.preventDefault()}
                          active>
                          <span>View details</span>
                        </NavLink>
                      </NavItem>
                      <li className="dropdown-divider" />
                      <NavItem>
                        <NavLink
                          id= {val.productId}
                          onClick={this.deleteButton.bind(this)}
                          className="text-danger mx-3">
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['fas', 'times']} />
                          </div>
                          <span>Delete</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </td>
          </tr>
        )

      })

    } else {
      table.body = <tr><td colSpan={table.header.length}>No Data</td></tr>
    }
    
    return (
      <Fragment>
        <HeaderCrumb title="Products" />
        {successMessage}
        <Card className="card-box mb-5">
          <div className="card-header">
            <div className="card-header--title">
              <small>Products</small>
              <b>This table contains products for all categories</b>
            </div>

            <div className="d-flex align-items-center">
            <Button size="sm" color="primary" id="AddEntryTooltip20" 
                        onClick={this.addNewProduct.bind(this)}>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  className="opacity-8 font-size-xs"
                />
              </span>
            </Button>
            <UncontrolledTooltip target="AddEntryTooltip20">
              Add new product
            </UncontrolledTooltip>
          </div>
          
          </div>

          <CardBody className="p-0">
            <div className="table-responsive">  {/* to remove scroll remove this className 'table-responsive' */}
              <Table hover striped className="text-nowrap mb-0">
                <thead className="thead-light">
                <tr>{table.header}</tr>
                </thead>
                <tbody>
                    {table.body}
                </tbody>
              </Table>
            </div>
            <div className="divider" />
            <div className="divider" />
            <div className="p-3 d-flex justify-content-center">
            </div>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

