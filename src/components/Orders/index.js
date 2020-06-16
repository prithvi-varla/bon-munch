import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection2 from '../DashboardDefault/DashboardDefaultSection2';
import HeaderCrumb from '../../layout-components/HeaderCrumb';

import { connect } from 'react-redux'
import { fetchAllOrders } from '../../actions/order_actions';


const mapStateToProps = (store) => ({
  orders: store.Orders,
});

const mapDispatchToProps = dispatch => ({
  fetchAllOrders: () => dispatch(fetchAllOrders())
});

class Orders extends Component {

  componentDidMount() {
    this.props.fetchAllOrders();
  }


  render() {
    
    var data = this.props.orders.data;
    return (
      <Fragment>
        <HeaderCrumb title="Orders" />
        <DashboardDefaultSection2 rest={data != null ? data.ordersSummary : null} isDashboard={false} />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);