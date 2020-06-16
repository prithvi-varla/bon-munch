import React, {Fragment, useState, Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Table, Col, CardBody, Card, CardTitle, CardHeader, Collapse, UncontrolledPopover, Container, InputGroup, InputGroupAddon, InputGroupText, FormText, Form, CustomInput, Label, FormGroup, Input, Badge, ListGroup, ListGroupItem, PopoverHeader, PopoverBody, UncontrolledTooltip, TabContent, TabPane, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, Progress, DropdownToggle, DropdownMenu, Alert, DropdownItem } from 'reactstrap'

import {connect} from 'react-redux';

import {
    setSidebarToggleMobile
} from '../../reducers/ThemeOptions';


import HeaderUserbox from "../../layout-components/HeaderUserbox";

const mapStateToProps = state => ({ 
    userDetail: state.Dashboard.user,
    headerShadow: state.ThemeOptions.headerShadow,
    headerBgTransparent: state.ThemeOptions.headerBgTransparent,
    sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

class Header extends Component {

    toggleSidebarMobile = () => {
        let {sidebarToggleMobile, setSidebarToggleMobile} = this.props;
        setSidebarToggleMobile(!sidebarToggleMobile);
    }

    render() {
        let { ...props } = this.props
        let {
            headerShadow,
            headerBgTransparent,
            sidebarToggleMobile
        } = this.props;

        return (
            <Fragment>
                <div className={cx("app-header", {'app-header--shadow': headerShadow, 'app-header--opacity-bg': headerBgTransparent})}>
                <div className="app-header--pane">
                    <button className={cx("navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn", {'is-active': sidebarToggleMobile})} onClick={this.toggleSidebarMobile}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"/>
                        </span>
                    </button>
                </div>
                <div className="app-header--pane">
                    <HeaderUserbox {...props}/>
                </div>
            </div>
            </Fragment>
    );
    }
}

const mapDispatchToProps = dispatch => ({

    setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
