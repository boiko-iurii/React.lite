import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

let title = "My site";
let hero = "Go-go-go-goooo";
const nav = {
    main: "#index",
    about: "#about",
    news: "#news",
    contact: "#contacts"
};
const contacts = [
    '+38(050)-123-45-67',
    '+38(067)-123-45-67',
    '+38(044)-444-45-67'
];
const address = [
    'Springfield',
    'State St',
    '959-n/a'
];
let copyrights = "Copyright, 2020";

ReactDOM.render(<App title={title} hero={hero} nav={nav} contacts={contacts} address={address} copyrights={copyrights} />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
