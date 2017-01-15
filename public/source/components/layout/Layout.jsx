import React, { Component } from 'react';

// eslint doesn't check for decorators before throwing the following error
// eslint-disable-next-line react/prefer-stateless-function
export default class Layout extends Component {
    render() {

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
