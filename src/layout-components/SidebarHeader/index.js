import React, {Fragment, useState, Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Table, Col, CardBody, Card, CardTitle, CardHeader, Collapse, UncontrolledPopover, Container, InputGroup, InputGroupAddon, InputGroupText, FormText, Form, CustomInput, Label, FormGroup, Input, Badge, ListGroup, ListGroupItem, PopoverHeader, PopoverBody, UncontrolledTooltip, TabContent, TabPane, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, Progress, DropdownToggle, DropdownMenu, Alert, DropdownItem } from 'reactstrap'

import {connect} from 'react-redux';

import {
    setSidebarToggle,
    setSidebarToggleMobile
} from '../../reducers/ThemeOptions';

import bonMunchLogo from '../../assets/images/bon-munch.png';



class SidebarHeader extends Component {

        toggleSidebarMobile = () => {
            let {sidebarToggleMobile, setSidebarToggleMobile} = this.props;
            setSidebarToggleMobile(!sidebarToggleMobile);
        }

        toggleSidebar = () => {
            let {sidebarToggle, setSidebarToggle} = this.props;
            setSidebarToggle(!sidebarToggle);
        }

        render() {

            let {
                sidebarToggle,
                sidebarToggleMobile
            } = this.props;

            return (
                <Fragment>
                    <div className="app-sidebar--header">
                        <div className="nav-logo">
                            <Link to="/" title="BonMunch">
                                <i>
                                    <img alt="BonMunch" src={bonMunchLogo}/>
                                </i>
                                <span>BonMunch</span>
                            </Link>
                        </div>
                        <button className={cx("navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn", {'is-active': sidebarToggleMobile})} onClick={this.toggleSidebarMobile}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"/>
                            </span>
                        </button>
                    </div>
                </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
    sidebarToggle: state.ThemeOptions.sidebarToggle
});

const mapDispatchToProps = dispatch => ({

    setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable)),
    setSidebarToggle: enable => dispatch(setSidebarToggle(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
