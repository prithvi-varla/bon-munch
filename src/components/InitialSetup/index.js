import React, { Fragment, Component } from 'react';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  UncontrolledAlert
} from 'reactstrap';

import { connect } from 'react-redux'

import HeaderCrumb from '../../layout-components/HeaderCrumb';

import { settingSave } from '../../actions/setting_actions';
import { fetchSetting } from '../../actions/setting_actions';

import InitialSetupForm from './Components/index';

const mapStateToProps = (store) => ({
  initialValues: store.SiteSetting.userData,
  settingInfo: store.SiteSetting,
  settingSaveResponse: store.SiteSetting
});

const mapDispatchToProps = dispatch => ({
  saveSetting: (data) => dispatch(settingSave(data)),
  fetchSiteSetting: () => dispatch(fetchSetting())

});

class InitialSetup extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      isOpen: true,
      timer: null
    };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchSiteSetting();
  }


  handleSubmitForm (formData, dispatch) {
    dispatch(settingSave(formData));
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

  render() {

    let successMessage , firstName, lastName, emailAddress;
    if (this.props.settingInfo.action !=null && this.props.settingInfo.action !='FETCH' ) {

      if (this.props.settingInfo.action == 'SAVE') {
        successMessage = (<UncontrolledAlert color="success" isOpen={this.state.isOpen}>
        Profile Settings are successfully saved.
      </UncontrolledAlert>
     );
      } else {
        successMessage = (<UncontrolledAlert color="danger" isOpen={this.state.isOpen}>
        Profile Settings are failed to save. Please try later.
      </UncontrolledAlert>
     );
      }
    }

    return (
      <Fragment>
        <HeaderCrumb title="Profile" />
        <Row>
          <Col md="5">
            <Card className="card-box mb-5">
                <CardBody>
                  <CardTitle className="font-weight-bold font-size-lg mb-4">
                    Initial Settings
                  </CardTitle>
                  {successMessage}
                  <InitialSetupForm {...this.props} actionSubmit={this.handleSubmitForm}/>
                </CardBody>
              </Card>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialSetup);