import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux'

import { fetchAllCategories } from '../../actions/category_actions';
import { deleteCategory } from '../../actions/category_actions';

import productImage from '../../assets/images/avatars/no_image.jpg';
import HeaderCrumb from '../../layout-components/HeaderCrumb';

import {
  Table,
  CardBody,
  Card,
  Badge,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  UncontrolledTooltip,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledAlert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import LoadingImage from '../../layout-components/LoadingImage'

const mapStateToProps = (store) => ({
  categoryInfo: store.Categories
});

const mapDispatchToProps = dispatch => ({
  deleteCategory: (id, type) => dispatch(deleteCategory(id, type)),
  fetchAllCategories: (categoryType) => dispatch(fetchAllCategories(categoryType))

});

class SubCategories extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      activeReviewPage: null,
      activeOrdersPage: null,
      activeGalleryPage: null,
      action: null,
      modal: false,

      isOpen: true,
      timer: null
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCategories("SUB_CATEGORY");
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

  editExistingCategory(event) {
    this.props.history.push('/SubCategories/NewEntry', { categoryId: event.currentTarget.id});
  }

  deleteButton(event) {
    var test ='test';
    this.props.deleteCategory(event.currentTarget.id, "SUB_CATEGORY");
    const authRequest = Object.assign({}, 
      { id: event.currentTarget.id
      });
  }

  addNewProduct(event) {
    this.props.history.push('/SubCategories/NewEntry');
  }

  handleOpenModal () {
    this.setState({ modal: !this.state.modal });
  }

  handleCloseModal () {
    this.setState({ modal: false });
  }
  
  render() {

    const { state } = this.props.location;

    if (this.props.categoryInfo.data  == undefined) {
      return (
        <div>
          <HeaderCrumb title="SubCategory" />
          <LoadingImage />
        </div>
      );
    }

    let successMessage;
    if (state != undefined) {
        successMessage = (<UncontrolledAlert color="success" isOpen={this.state.isOpen}>
                              SubCategory information is successfully saved.
                            </UncontrolledAlert>
                          );
    }

    let table = { header: '', body: '' }

    var headerNames = ['#', '',  'Product Name', 'Category', 'Sort Order', 'Actions'];
    var dataValues = this.props.categoryInfo.data != undefined ? this.props.categoryInfo.data : [];

    table.header = headerNames.map((val, k) => {
      return (
        <th key={`thead-${k}`} className="text-center">{val}</th>
      )
    })

    if (dataValues.length > 0) {

      table.body = dataValues.map((val, k) => {
        var categoryName= val.categoryMapName.substr(0, val.categoryMapName.indexOf('->')); 
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
                    {val.categoryName}
                  </a>
                  <span className="text-black-50 d-block">
                    {val.categoryDescription}
                  </span>
                </div>
              </div>
            </td>

            <td className="text-center">
              <Badge color="success" className="h-auto py-0 px-3">
              {categoryName}
              </Badge>
            </td>

            <td className="text-center">{val.sortOrder}</td>
            
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
              id= {val.categoryId}
              onClick={this.editExistingCategory.bind(this)}
              >
              <span>View details</span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem
              id= {val.categoryId}
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
                        id= {val.categoryId}
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
        <HeaderCrumb title="Sub Categories" />
        {successMessage}
        <Card className="card-box mb-5">
          <div className="card-header">
            <div className="card-header--title">
              <small>Sub Categories</small>
              <b>This table contains all sub categories</b>
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

export default connect(mapStateToProps, mapDispatchToProps)(SubCategories);

