import React, { Component } from 'react';
import styles from './about.scss';

import Header from '../header/Header';

export default class About extends Component {
    render() {
        return (
            <div className={styles.aboutLayout}>
                <Header />
                <div className={styles.aboutContent}>

                </div>
            </div>
        );
    }
}