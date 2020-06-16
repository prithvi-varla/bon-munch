import React from "react";
import TopProgressBar from "../TopProgressBar";

export default LayoutComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showProgressBar: true
      };
    }

    componentDidMount() {
      this.setState({
        showProgressBar: false
      });
    }
//<TopProgressBar show={this.state.showProgressBar} />
    render() {
      return (
        <React.Fragment>
          <LayoutComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};