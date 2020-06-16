import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar5 from '../../assets/images/avatars/avatar5.jpg';

import adminImage from '../../assets/images/avatars/no_image.jpg';


import { doLogout } from '../../actions/login_actions'
import { connect } from 'react-redux';
import { Redirect} from 'react-router'

class HeaderUserbox extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedOut: false
    };
  }
  clickLogout(e) {
    e.preventDefault();
    //this.props.changeAccessToken('admin', 'admin');
    this.setState({
      isLoggedOut: true
    })
    //return <Redirect to={'/DashboardDefault'} />
    //this.props.history.push('/');
  }

  render() {

    if (this.state.isLoggedOut) {
      return <Redirect to={'/Logout'} />
    }

    let { userDetail, menuList } = this.props;
    return (
      <Fragment>
        <UncontrolledDropdown className="user-box position-relative ml-2">
          <DropdownToggle
            color="link"
            className="p-0 text-left d-flex align-items-center">
            <div className="d-block d-44 rounded-sm overflow-hidden">
              <img src={adminImage} className="img-fluid" alt="..." />
            </div>
            <div className="d-none d-xl-block pl-2">
              <div className="font-weight-bold">Admin</div>
            </div>
            <span className="pl-1 pl-xl-3">
              <FontAwesomeIcon icon={['fas', 'angle-down']}
                className="opacity-5" />
            </span>
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
            <ListGroup flush className="text-left bg-transparent">
              <ListGroupItem className="rounded-top">
                <Nav pills className="nav-neutral-primary flex-column">
                  <NavItem>
                    <NavLink href="/Profile">
                    <div className="text-center text-success d-50">
                      <FontAwesomeIcon icon={['far', 'user']}
                        className="font-size-l text-success" />
                  </div>
                      My Account
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/" onClick={this.clickLogout.bind(this)}>
                    <div className="text-center text-success d-50">
                    <FontAwesomeIcon icon={['fa', 'power-off']}
                            className="font-size-l text-success" />
                    </div>
                      Log off
                    </NavLink>
                  </NavItem>
                </Nav>
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown >
            <a href="logout" className="btn" onClick={this.clickLogout.bind(this)} >
            <FontAwesomeIcon icon={['fa', 'power-off']} 
                    className="font-size-l text-success" />
            </a>
            </UncontrolledDropdown>
      </Fragment>
    );
  }
}


function mapStateToProps(store) {
  return {
    login: store.Login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeAccessToken: (username, password) => {
      dispatch(doLogout(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserbox);

