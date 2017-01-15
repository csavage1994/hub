import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from 'axios';

import History from '../history/History';
import App from '../app/App';
import Layout from '../layout/Layout';

const query = `{
    RedditType {
        score
        subreddit
        selftext
        author
        thumbnail
        permalink
        url
        title
        num_comments
    }
}`


const data = axios.post('/graphql', {
    query
}).then((res) => {
    let master = [];
    Object.keys(res.data.data).forEach((item) => {
        switch(item) {
            case 'RedditType': {
                Object.keys(res.data.data[item]).forEach((infoField) => {
                    const obj = {
                        cardType: item.substring(0, item.length - 4),
                        ...res.data.data[item][infoField]
                    };
                    master.push(obj);
                });
            }
            default: {
                return;
            }
        }
    })
    return master;
});

export default function HubRouter() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute data={data} component={App} />
                <Route path="history" component={History} />
            </Route>
        </Router>
    );
}
