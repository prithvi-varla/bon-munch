import React, { Fragment, Component } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { connect } from 'react-redux';
import RouterLink from '../ReactMetismenuRouterLink';
import { Redirect } from 'react-router'

import MetisMenu from 'react-metismenu';

import { fetchSetting } from '../../actions/setting_actions';

const dashboardMetisMenu = {
  label: 'Dashboards',
  icon: 'pe-7s-display2',
  content: [
    {
      label: 'Monthly Reports',
      to: '/DashboardDefault'
    }
  ]
};

const profilesMetisMenu = {
  label: 'Profiles',
  icon: 'pe-7s-users',
  content: [
    {
      label: 'My Profile',
      to: '/Profile'
    }
  ]
}

const ordersMetisMenu = {
  label: 'Orders',
  icon: 'pe-7s-cart',
  to: '/Orders'
};

const commerceMetisMenu = {
  label: 'e-commerce',
  icon: 'pe-7s-note2',
  content: [
    {
      label: 'Inital Setup',
      to: '/InitialSetup'
    },
    {
      label: 'Categories',
      to: '/Categories'
    },
    {
      label: 'Sub Categories',
      to: '/SubCategories'
    },
    {
      label: 'Products',
      to: '/Products'
    }
  ]
};

const pictureMetisMenu = {
  label: 'Pictures',
  icon: 'pe-7s-photo',
  content: [
    {
      label: 'Landing Page',
      to: '/LandingPage'
    },
    {
      label: 'Gallery',
      to: '/Gallery'
    }
  ]
};

const mapsMetisMenu = {
  label: 'Maps',
  icon: 'pe-7s-map-2',
  to: '/Maps'
};

class SidebarMenu extends Component {

  componentDidMount() {
    this.props.fetchSiteSetting();
  }


  render() {

    let menuContent = [];
    // if the token is not present and not valid return to login page
    if (localStorage.getItem("token") == null) {
      return <Redirect to={'/LoginPage'} />
    }

    menuContent.push(dashboardMetisMenu);
    menuContent.push(profilesMetisMenu);
    menuContent.push(ordersMetisMenu);
    menuContent.push(commerceMetisMenu);
    if (this.props.settingInfo.action !=null) {
      if (this.props.settingInfo.userData.activeGallery) {
        menuContent.push(pictureMetisMenu);
      }
    }

    menuContent.push(mapsMetisMenu);

    let { sidebarUserbox } = this.props;

    return (
      <Fragment>
        <PerfectScrollbar>
          <div className="sidebar-navigation">
            <div className="sidebar-header">
              <span>Navigation menu</span>
            </div>
            <MetisMenu
              content={menuContent}
              LinkComponent={RouterLink}
              activeLinkFromLocation
              iconNamePrefix=""
              noBuiltInClassNames={true}
              classNameItemActive="active"
              classNameIcon="sidebar-icon"
              iconNameStateVisible="sidebar-icon-indicator"
              iconNameStateHidden="sidebar-icon-indicator"
              classNameItemHasVisibleChild="submenu-open"
              classNameItemHasActiveChild="active"
              classNameStateIcon="pe-7s-angle-down"
            />
          </div>
        </PerfectScrollbar>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  settingInfo: state.SiteSetting,
  sidebarUserbox: state.ThemeOptions.sidebarUserbox
});

const mapDispatchToProps = dispatch => ({
  fetchSiteSetting: () => dispatch(fetchSetting())
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
