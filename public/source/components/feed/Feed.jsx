import React, { Component } from 'react';
import styles from './feed.scss';
const fbIcon = require('../card/fbLogo.png');
const twitterIcon = require('../card/twitterLogo.svg');
const logoArr = [fbIcon, twitterIcon];

import Card from '../card/Card';

export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardData: [],
        };
    }

    componentWillMount() {
        this.props.data.then((data) => {
            this.setState({
                ...this.state,
                cardData: data,
            });
        })
    }

    render() {


        console.log(this.state.cardData, 'here');
        const Cards = [];
        this.state.cardData.forEach((item) => {
            const logoIndex = Math.floor(Math.random() * 2);
            const card = (
                <Card cardData={item} logo={logoArr[logoIndex]} />
            );
            Cards.push(card);
        });

        /*
        for(let i = 0; i < 10; i++) {
            const logoIndex = Math.floor(Math.random() * 2);
            const card = (
                <Card type="reddit" logo={logoArr[logoIndex]} />
            );
            Cards.push(card);
        }
        */

        return (
            <div className={styles.feed}>
                {Cards}
            </div>
        );
    }
}