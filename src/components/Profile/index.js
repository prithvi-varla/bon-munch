import React, { Fragment, Component } from 'react';

import profileImage from '../../assets/images/avatars/no_image.jpg';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  UncontrolledAlert
} from 'reactstrap';

import {
   List,
   ListItem,
   Typography
} from '@material-ui/core';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HeaderCrumb from '../../layout-components/HeaderCrumb';

import { userProfileUpdate } from '../../actions/profile_actions';
import { fetchUserProfile } from '../../actions/profile_actions';

import ProfileForm from './Components/index';
 
const mapStateToProps = (state, ownProps) => {
	return {
    initialValues: state.ProfileSetting.userData,
    profileSetting: state.ProfileSetting
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: values => {
			dispatch(
				userProfileUpdate({
					id: values.id,
					firstName: values.firstName,
					lastName: values.lastName,
					emailAddress: values.emailAddress,
					password: values.password,
          roleCode: values.roleCode,
          textArea: values.textArea
				})
      );

    },
    fetchUserProfile: () => dispatch(fetchUserProfile())
	};
};

class Profile extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      isOpen: true,
      timer: null
    };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchUserProfile();
  }

  handleSubmitForm (formData, dispatch) {
    if (this.props.initialValues != null && this.props.initialValues.password != '') {
      dispatch(userProfileUpdate(formData, 
        this.props.initialValues.password === formData.password ? false : true
        ));
    }
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
    if (this.props.profileSetting.action !=null && this.props.profileSetting.action !='FETCH' ) {

      if (this.props.profileSetting.action == 'UPDATE') {
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
    
    if (this.props.profileSetting.userData !=null ) {

      firstName = this.props.profileSetting.userData.firstName;
      lastName = this.props.profileSetting.userData.lastName;
      emailAddress = this.props.profileSetting.userData.emailAddress;
    }

    return (
      <Fragment>
        <HeaderCrumb title="Profile" />
        <Row>
          <Col md="5">
            <Card className="card-box mb-4 pt-4 pb-2">
                <div className="d-flex align-items-center px-4 mb-3">
                    <div className="avatar-icon-wrapper rounded mr-3">
                        <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                            <div className="rounded overflow-hidden">
                                <img alt="..." className="img-fluid" src={profileImage} />
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                        <a href="#/" onClick={e => e.preventDefault()} className="font-weight-bold font-size-lg" title="...">{firstName} {lastName}</a>
                        <span className="text-black-50 d-block pb-1">Administrator</span>
                    </div>
                </div>
                <div className="font-size-sm p-3 my-3 bg-neutral-dark mx-4 rounded-sm">
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">
                            Email:
                        </span>
                        <span className="text-black-50">{emailAddress}</span>
                    </div>
                    <div className="d-flex justify-content-between py-2">
                        <span className="font-weight-bold">
                            Job Description:
                        </span>
                        <span className="text-black-50">Admin</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">
                            Location:
                        </span>
                        <span className="text-black-50">USA</span>
                    </div>
                </div>
                <List className="p-0">
                    <ListItem button className="px-4">
                            <div className="nav-link-icon opacity-6">
                                <AddCircleOutlineIcon />
                            </div>
                            <span>Dashboard</span>
                    </ListItem>
                    <Typography className="text-black py-2 px-3" component="div">Others</Typography>
                    <ListItem button className="px-4">
                            <div className="nav-link-icon opacity-6">
                                <FontAwesomeIcon icon={['far', 'object-group']} />
                            </div>
                            <span>Components</span>
                    </ListItem>
                            </List>
            </Card>
          </Col>
          <Col md="7">
              <Card className="card-box mb-5">
                <CardBody>
                  <CardTitle className="font-weight-bold font-size-lg mb-4">
                    User Profile
                  </CardTitle>
                  {successMessage}
                  <ProfileForm {...this.props} actionSubmit={this.handleSubmitForm}/>
                </CardBody>
              </Card>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);