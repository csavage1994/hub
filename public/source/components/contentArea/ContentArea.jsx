import React, { Component } from 'react';
import styles from './contentArea.scss';

import Feed from '../feed/Feed';
import Sidebar from '../sidebar/Sidebar';

export default class ContentArea extends Component {
    render() {
        return (
            <div className={styles.contentArea}>
                <Feed data={this.props.data} />
            </div>
        );
    }
}