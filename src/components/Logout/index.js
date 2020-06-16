import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux'

import HeaderCrumb from '../../layout-components/HeaderCrumb';
import { doLogout } from '../../actions/login_actions'
import { Redirect } from 'react-router'

import LoadingImage from '../../layout-components/LoadingImage';


const mapStateToProps = (store) => ({
  login: store.Login
});

function mapDispatchToProps(dispatch) {
  return {
    changeAccessToken: (username, password) => {
      dispatch(doLogout(username, password))
    }
  }
}

class Logout extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      activeReviewPage: null,
      activeOrdersPage: null,
      activeGalleryPage: null,
      action: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.changeAccessToken('admin', 'admin');
    }, 2000)
  }
  
  render() {

    if (!this.props.login.authenticated) {
      return <Redirect to={'/LoginPage'} />
    }

    return (
      <Fragment>
        <HeaderCrumb title="Logout" />
        <h1>Please wait .....</h1>
        <LoadingImage />
      </Fragment>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Logout);

