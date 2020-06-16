
import React, { Fragment, Component } from 'react';

import Loading from './loading';
import MessageAlert from './message_alert';
import { doLogin } from '../../actions/login_actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Button
} from 'reactstrap';

import { Container, 
  Grid, Card,
   CardContent, 
   FormControl, 
   Input,
   InputLabel,
   InputAdornment,
   Checkbox,
   FormControlLabel
} from '@material-ui/core';

import loginLogo from '../../assets/images/login.svg';
import bonMunchLogo from '../../assets/images/bon-munch.png'

class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      login: "",
      pass: "",
      isDisabled: false,
      isLoggedIn: false,
      loading: false,
      checked1: true,
      setChecked1: true,
      alert: {
        message: '',
        className: 'hidden',
        header: 'Error'
      }
    };

  }

  /*
  pressEnter(event) {
    if (event.charCode == 13) {
      this.doLogin();
    }
  }
  */
 
  changeEmail(event) {
    let fleldVal = event.target.value;
    this.setState({ login: fleldVal, pass: this.state.pass });
  }

  changePass(event) {
    let fleldVal = event.target.value;
    this.setState({ pass: fleldVal, login: this.state.login });
  }

  handleChange1(event) {
    this.setState({setChecked1: event.target.checked});
  }

  componentWillUnmount() {
    document.body.removeAttribute("style");
  }

  alertHide() {
    this.setState(function (prev) {
      return {
        alert: { ...prev.alert, className: 'hide' }
      }
    })
  }

  /*
  handleKeyPress(e) {
    if (e.which === 13) {
      this.handleSubmit();
    }
  }
  */

  componentWillMount() {
    let { login } = this.props
    if (login.accesstoken) {
      this.setState({
        isDisabled: true,
        alert: {
          message: 'Please wait .. redirecting ...',
          header: 'Logged in',
          className: 'alert alert-success'
        }
      })
      setTimeout(() => {
        this.setState({
          isLoggedIn: true
        })
      }, 2000)
    }
  }

  handleClickAlert() {
    let { alertObject } = this.state, temp = { alertObject, className: 'hidden' };
    this.setState({
      alertObject: temp
    });
  }

  handleSubmit() {
    this.setState({
      loading: true, isDisabled: true
    })
    setTimeout(() => {
      this.props.changeAccessToken(this.state.login, this.state.pass)
      this.setState({
        loading: false, isDisabled: false,
        isLoggedIn: true
      })

    }, 3000)
  }
  
  render() {

    let html;
    if (this.state.isLoggedIn && this.props.login.authenticated) {
      return <Redirect to={'/DashboardDefault'} />
    }

    if (this.props.login.failed) {
     // if (this.state.isLoggedIn) {
      html = (
        <div id="login-error">
          <strong >Something went wrong....Please try again.</strong>
        </div>
      )
    }

    return (
        <Fragment>
            <div className="app-wrapper min-vh-100">
                <div className="app-main flex-column">
                <div className="app-content p-0 login-background">
                    <div className="app-content--inner d-flex align-items-center">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                            <div className="bg-composed-wrapper--content py-5">
                                <Container maxWidth="lg">
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} lg={5} className="d-none d-xl-flex align-items-center">
                                            <img alt="..." className="w-100 mx-auto d-block img-fluid"  src={loginLogo}/>
                                        </Grid>
                                        <Grid item xs={12} lg={7} className="d-flex flex-column align-items-center">
                                            <span className="w-100 text-md-center pb-4 grid-background">
                                              <div id="login-logo">
                                                <img src={bonMunchLogo} alt="Logo" className="normal-logo logo-white" />
                                                <span className="company-name"> BonMunch</span>   
                                              </div>                                                 
                                            </span>
                                            <Card className="m-0 w-100 p-0 border-0">
                                            <div className="card-header d-block p-3 mx-2 mb-0 mt-2 rounded border-0">
                                            <div className="text-muted text-center mb-3">
                                              <span>Login in with</span>
                                            </div>
                                            <div className="text-center">
                                              <Button variant="outlined" className="mr-2 text-facebook">
                                                <span className="btn-wrapper--icon">
                                                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                                                </span>
                                                <span className="btn-wrapper--label">
                                                  Facebook
                                                </span>
                                              </Button>
                                              <Button variant="outlined" className="ml-2 text-twitter">
                                                <span className="btn-wrapper--icon">
                                                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                                                </span>
                                                <span className="btn-wrapper--label">
                                                  Twitter
                                                </span>
                                              </Button>
                                            </div>
                                            </div>
                                            <CardContent className="p-3">
                                            <div className="text-center text-black-50 mb-3">
                                            <span>Or login in with credentials</span>
                                            </div>
                                            <form className="px-5" onSubmit={e => { e.preventDefault(); }}>
                                            
                                              <div className="mb-3"><FormControl className="w-100">
                                                <InputLabel htmlFor="input-with-icon-adornment">Email address</InputLabel>
                                                  <Input fullWidth
                                                  required
                                                  id="input-with-icon-adornment"
                                                  //onKeyPress={this.handleKeyPress.bind(this)} 
                                                  disabled={this.state.isDisabled} 
                                                  name="username" 
                                                  ref="username" 
                                                  type="text" 
                                                  placeholder="Type Your Username Or Email Here" 
                                                  onChange={this.changeEmail.bind(this)} 
                                                  /* startAdornment={
                                                  <InputAdornment position="start">
                                                  </InputAdornment>
                                                  } */
                                                  />
                                                </FormControl>
                                              </div>
                                            
                                              <div className="mb-3">
                                                <FormControl className="w-100">
                                                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                    <Input
                                                    required
                                                    id="standard-adornment-password" fullWidth
                                                    type='password'
                                                    //onKeyPress={this.handleKeyPress.bind(this)} 
                                                    disabled={this.state.isDisabled} 
                                                    name="password" 
                                                    ref="password"
                                                    placeholder="Type Your Password" 
                                                    onChange={this.changePass.bind(this)}
                                                    /* startAdornment={
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                    } */
                                                    />
                                                </FormControl>
                                              </div>
                                            
                                            <div className="w-100">
                                                <FormControlLabel
                                              control={
                                              <Checkbox
                                              checked={this.state.checked1}
                                              onChange={this.handleChange1.bind(this)}
                                              value="checked1"
                                              color="primary"
                                              />
                                              }
                                              label="Remember me"
                                              />
                                            </div>

                                            <div className="text-center">
                                              <div className="col-xs-12 social-text">
                                                <MessageAlert hide="{this.alertHide.bind(this)}" option={this.state.alert} />
                                                <Loading show={this.state.loading} />
                                              </div>
                                            </div>
                                              <div className="text-center">{html}</div>
                                              <div className="text-center">
                                                <Button 
                                                color="primary" 
                                                variant="contained" 
                                                size="large" 
                                                className="my-2" 
                                                disabled={this.state.isDisabled} 
                                                onClick={this.handleSubmit.bind(this)} 
                                                type="submit">Login
                                                </Button>
                                              </div>
                                            </form>
                                            </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
  }
}

  export default connect(store => {
    return {
      login: store.Login
    };
  }, dispatch => {
    return {
      changeAccessToken: (username, password) => {
        dispatch(doLogin(username, password))
      }
    }
  })(LoginPage)