import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleSidebar } from '../../actions/actions';

import styles from './sidebar.scss';

@connect((store) => ({ sidebarExpanded: store.settings.sidebarExpanded }))
export default class Sidebar extends Component {
    expandSidebar() {
        this.props.dispatch(toggleSidebar(this.props.sidebarExpanded))
    }

    render() {
        const sidebarClass = (this.props.sidebarExpanded) ? styles.sidebarExpanded : styles.sidebar;

        return (
            <div onMouseEnter={this.expandSidebar.bind(this)} onMouseLeave={this.expandSidebar.bind(this)} className={sidebarClass} />
        );
    }
}