import React, { Fragment, Component } from 'react';

import {
  Table,
  CardBody,
  Card,
  Badge,
  Button
} from 'reactstrap';

import LoadingImage from '../../../layout-components/LoadingImage'

class LivePreviewExample extends Component {

  constructor(props) {

    super(props);
    this.state = {
        name: '',
        price: 0,
        description:''
    };
  }

  render() {

    if (this.props.rest == undefined) {
      return (
        <div>
          <LoadingImage />
        </div>
      );
    }

    let table = { header: '', body: '' }

    var headerNames = ['#', 'Name', 'Status', 'Progress', 'Price'];
    var dataValues = this.props.rest != null ? this.props.rest : [];

    table.header = headerNames.map((val, k) => {
      return (
        <th key={`thead-${k}`} className="text-center">{val}</th>
      )
    });

    if (dataValues.length > 0) {

      table.body = dataValues.map((val, k) => {
        return (
          <tr key={`thead-${k}`}>
          <td className="text-center">{k+1}</td>
          <td className="text-center">
            <div>
              <a
                onClick={e => e.preventDefault()}
                className="font-weight-bold text-black"
                title="...">
                {val.name}
              </a>
            </div>
          </td>
          <td className="text-center">
            <Badge
              color="neutral-success"
              className="text-success px-4">
              {val.status}
            </Badge>
          </td>
          <td className="text-center">{val.date}</td>
          <td className="text-center"><span dangerouslySetInnerHTML={{ __html: '&dollar;' }} />{val.price}</td>
        </tr>
        
          )
        })

    } else {
      table.body = <tr><td colSpan={table.header.length}>No Data</td></tr>
    }
    return (
      <Fragment>
        <Card className="card-box mb-5">
          <div className="card-header pr-2">
            <div className="card-header--title">Customer Orders</div>
          </div>
          <CardBody>
            <div className="table-responsive">
              <Table hover borderless className="text-nowrap mb-0">
                <thead>
                  <tr>{table.header}</tr>
                </thead>
                <tbody>
                    {table.body}
                </tbody>
              </Table>
            </div>
          </CardBody>
          <div className="text-center card-footer justify-content-between" >
            <div className={this.props.isDashboard ? '' : 'hidden'}>
            <a href="/Orders" >
              <Button size="sm" color="primary" >
                View All Orders
              </Button>
              </a>
            </div>
          </div>
        </Card>
      </Fragment>
    );
  }
}


export default LivePreviewExample;