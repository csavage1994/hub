import React from 'react';
import { Provider } from 'react-redux';

import HubRouter from './hub-router/HubRouter';
import store from '../store';

export default function ReportApp() {
    return (
    	<Provider store={store}>
            <HubRouter />
        </Provider>
    );
}
