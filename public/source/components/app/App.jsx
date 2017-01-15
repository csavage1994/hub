import React, { Component } from 'react';
import styles from './app.scss';

import Header from '../header/Header';
import ContentArea from '../contentArea/ContentArea';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Header />
                <ContentArea data={this.props.route.data} />
            </div>
        )
    }
}