import React, { Fragment, Component } from 'react';

import DashboardDefaultSection2 from './DashboardDefaultSection2';
import DashboardDefaultSection3 from './DashboardDefaultSection3';
import HeaderCrumb from '../../layout-components/HeaderCrumb';

import { connect } from 'react-redux'
import { fetchAdminInfo } from '../../actions/dashboard_actions';

const mapStateToProps = (store) => ({
  adminInfo: store.Dashboard,
});

const mapDispatchToProps = dispatch => ({
  fetchAdminInfo: () => dispatch(fetchAdminInfo())
});

class DashboardDefault extends Component {

  componentDidMount() {
    this.props.fetchAdminInfo();
  }

  render() {
    var data = this.props.adminInfo.data;
    return (
      <Fragment>
        <HeaderCrumb title="Dasboard" />
        <DashboardDefaultSection3 rest={data} />
        <DashboardDefaultSection2 rest={data != null ? data.ordersSummary : null} isDashboard={true}/>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardDefault);