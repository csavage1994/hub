import React, { Component } from 'react';
import styles from './card.scss';
const fbIcon = require('./fbLogo.png');
const twitterIcon = require('./twitterLogo.svg');

export default class Card extends Component {
    render() {
        console.log(this.props.cardData.thumbnail)
        switch(this.props.cardData.cardType) {
        case 'Reddit': {
            /*
             <span style={{
             backgroundImage: `url(build/${this.props.logo})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
             }} className={styles.logoSection}/>
             */
            return (
                <div className={`${styles.redditCard} ${styles.card}`}>



                    <div className={styles.redditInfoSection}>
                    <span className={styles.redditVotes}>
                        <div className={styles.upvoteArrow}/>
                        <div className={styles.redditScore}>{this.props.cardData.score}</div>
                        <div className={styles.downvoteArrow}/>
                    </span>
                    <img className={(this.props.cardData.thumbnail === 'self' || this.props.cardData.thumbnail === 'default') ? styles.redditSelf : styles.redditPicture}
                         src={(this.props.cardData.thumbnail === 'self' || this.props.cardData.thumbnail === 'default') ? null : this.props.cardData.thumbnail} />
                    <span className={styles.redditPost}>
                        <a className={styles.redditLink} href={`https://www.reddit.com${this.props.cardData.permalink}`}>{this.props.cardData.title}</a>
                        <span className={styles.redditSubmitted}>
                            submitted 6 hours ago by <a href={`https://www.reddit.com/user/${this.props.cardData.author}`}>{this.props.cardData.author}</a> to <a href={`https://www.reddit.com/r/${this.props.cardData.subreddit}`}>/r/{this.props.cardData.subreddit}</a>
                        </span>
                        <a href={`https://www.reddit.com${this.props.cardData.permalink}`} className={styles.redditComments}>{this.props.cardData.num_comments} comments</a>
                    </span>
                    </div>
                </div>
            );
            break;
        }
        case 'twitter': {
            return (
                <div className={`${styles.twitterCard} ${styles.card}`}>
                    <span style={{
                        backgroundImage: `url(build/${this.props.logo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className={styles.logoSection}/>
                    <div className={styles.twitterInfoSection}>
                        <div className={styles.twitterHeader}>
                            <span className={styles.twitterThumbnail} />
                            <span className={styles.twitterUserInfo}>
                                <div className={styles.twitterUsername}>
                                    Colton Savage
                                </div>
                                <div className={styles.twitterHandle}>
                                    @csavage94
                                </div>
                            </span>
                            <span className={styles.twitterSubmittedTime}>
                                30m
                            </span>
                        </div>
                    </div>
                </div>
            );
        }
        default: {
            return (
                <div>
                    Oh fuck...
                </div>
            );
        }
        }
    }
}
