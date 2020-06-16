import React, { Fragment, Component } from 'react';

import cx from 'classnames';

import { Nav, NavItem, NavLink } from 'reactstrap';

import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    let { footerShadow, footerFixed, footerBgTransparent } = this.props;

    return (
      <Fragment>
        <div
          className={cx('app-footer text-black-50', {
            'app-footer--shadow': footerShadow,
            'app-footer--opacity-bg': footerBgTransparent
          })}>
          <div className="app-footer--second">
            <span>BonMunch App</span> ©
            2020 - developed with by{' '}
            <a href="https://bonmunch.com" target="_blank" title="bonmunch.com">
              BonMunch.com
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed,
  footerShadow: state.ThemeOptions.footerShadow,
  footerBgTransparent: state.ThemeOptions.footerBgTransparent
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
