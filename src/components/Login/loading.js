import React, { Component } from 'react';

import loading from '../../assets/images/loading.gif';


export default class Loading extends Component{
    render(){
        let { show = false } = this.props
        return(
            <div className={ show ? '' : 'hidden' }>
                <img src={loading} alt="Loading ... " />
            </div>
        );
    }
}
