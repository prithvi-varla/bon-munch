import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from 'reactstrap';

import Chart from 'react-apexcharts';

export default class LivePreviewExample extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      chart53Options: {
        chart: {
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          color: '#4191ff',
          curve: 'smooth',
          width: 2
        },
        fill: {
          color: '#f4772e'
        },
        colors: ['#f4772e'],
        legend: {
          show: false
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        }
      },
      chart53Data: [
        {
          name: 'Orders',
          data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
        }
      ]
    };
  }

  render() {

    var dataValues = this.props.rest != null ? this.props.rest : [];

    var dailySummary = dataValues.dailySummary;
    var totalSummary = dataValues.totalSummary;

    var monthlyUsers = ''
    var usersProgress = ''
    var totalUsers = ''
    var monthlyOrders = ''
    var ordersProgress = ''
    var totalOrders = ''

    var totalUsers = ''
    var totalOrders = ''
    var totalRevenue = ''
    var monthlyOrdersList =  []

    if (dailySummary != undefined && totalSummary != undefined) {
      
      monthlyUsers = dailySummary.monthlyUsers
      usersProgress = dailySummary.usersProgress
      totalUsers = dailySummary.totalUsers
      monthlyOrders = dailySummary.monthlyOrders
      ordersProgress = dailySummary.ordersProgress
      totalOrders = dailySummary.totalOrders

      totalUsers = totalSummary.totalUsers
      totalOrders = totalSummary.totalOrders
      totalRevenue = totalSummary.totalRevenue

      const authRequest = Object.assign({}, { name: 'Orders', data: totalSummary.monthlyOrdersList });
      monthlyOrdersList.push(authRequest);
    }

    return (
      <Fragment>
        <Row>
          <Col xl="7">
            <Card className="card-box mb-5">
            <div className="card-header d-block">
                  <span className="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">
                    Monthly Summary
                  </span>
                </div>
              <CardHeader>
                <div className="font-size-lg d-block text-truncate">
                  <span className="text-black-50 pr-2"></span> Users
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="6" md="3">
                    <div className="text-center">
                      <span className="text-black-50 d-block">Users</span>
                      <b className="font-size-xxl">{monthlyUsers}</b>
                    </div>
                  </Col>
                  <Col lg="6" md="3">
                    <div className="text-center">
                      <span className="text-black-50 d-block">Total Users</span>
                      <b className="font-size-xxl">{totalUsers}</b>
                    </div>
                  </Col>
                  <Col lg="12" md="6" className="align-box-row">
                    <div className="w-100 mt-3 mt-md-0">
                      <div className="py-2">
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <Progress
                              value={usersProgress}
                              color="success"
                              className="progress-bar-rounded">
                              {' '}
                              {usersProgress}%
                            </Progress>
                          </div>
                          <div className="line-height-sm text-center ml-4">
                                <b className="font-size-lg text-success">
                                {usersProgress}%
                                </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem className="p-0">
                  <div className="divider" />
                  <CardHeader>
                    <div className="font-size-lg d-block text-truncate">
                      <span className="text-black-50 pr-2"></span> Orders
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col lg="6" md="3">
                        <div className="text-center">
                          <span className="text-black-50 d-block">Orders</span>
                          <b className="font-size-xxl">{monthlyOrders}</b>
                        </div>
                      </Col>
                      <Col lg="6" md="3">
                        <div className="text-center">
                          <span className="text-black-50 d-block">Total Orders</span>
                          <b className="font-size-xxl">{totalOrders}</b>
                        </div>
                      </Col>
                      <Col lg="12" md="6" className="align-box-row">
                        <div className="w-100 mt-3 mt-md-0">
                          <div className="py-2">
                            <div className="align-box-row">
                              <div className="flex-grow-1">
                                <Progress
                                  value={ordersProgress}
                                  color="warning"
                                  className="progress-bar-rounded">
                                  {' '}
                                  {ordersProgress}%
                                </Progress>
                              </div>
                              <div className="line-height-sm text-center ml-4">
                                <b className="font-size-lg text-warning">
                                {ordersProgress}%
                                </b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col xl="5">
            <Card className="card-box mb-5">
              <div className="px-4 px-xl-5 pb-1">
                <div className="card-header d-block">
                  <span className="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">
                    Total Summary
                  </span>
                </div>
                <CardBody className="p-0">
                  <div className="grid-menu grid-menu-2col">
                    <Row className="no-gutters">
                      <Col lg="4" className="p-3">
                        <div className="text-center">
                          <FontAwesomeIcon
                            icon={['fa', 'print']}
                            className="font-size-xxl text-success my-3"
                          />
                          <span className="text-black-50 d-block">Orders</span>
                          <b className="font-size-xxl">{totalOrders}</b>
                        </div>
                      </Col>
                      <Col lg="4" className="p-3">
                        <div className="text-center">
                          <FontAwesomeIcon
                            icon={['fas', 'user']}
                            className="font-size-xxl text-warning my-3"
                          />
                          <span className="text-black-50 d-block">Users</span>
                          <b className="font-size-xxl">{totalUsers}</b>
                        </div>
                      </Col>
                      <Col lg="4" className="p-3">
                        <div className="text-center">
                          <FontAwesomeIcon
                            icon={['fa', 'award']}
                            className="font-size-xxl text-success my-3"
                          />
                          <span className="text-black-50 d-block">Revenue</span>
                          <b className="font-size-xxl"><small className="text-black-50 pr-1">$</small>{totalRevenue}</b>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
                
                <div className="card-header border-0 d-block">
                  <span className="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">
                    6 Months Revenue
                  </span>
                </div>
                <Chart
                  options={this.state.chart53Options}
                  series={monthlyOrdersList}
                  type="area"
                  height={170}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
