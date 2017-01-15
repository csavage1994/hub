import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.scss';

// eslint-disable-next-line no-unused-vars
import ReportApp from './components';

const app = document.querySelector('.js__appComponent');

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<ReportApp />, app);
