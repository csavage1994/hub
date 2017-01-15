import React, { Component } from 'react';
import styles from './header.scss';

const fbIcon = require('../card/fbLogo.png');
const twitterIcon = require('../card/twitterLogo.svg');

export default class Header extends Component {
	render() {
		return (
			<div className={styles.header}>
				<span className={styles.filter}>
					<span style={{ backgroundImage: `url(build/${fbIcon})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={styles.filterItem}>

					</span>
					<span style={{ backgroundImage: `url(build/${twitterIcon})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={styles.filterItem}>

					</span>
				</span>

			</div>
		)
	}
}