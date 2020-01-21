import React from 'react';
import logo from './logo.svg';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <header className="app-header">

                <img src={logo} className="app-logo" />

                <h1 className="title">Изучаем React.Lite lvl</h1>
                <h2 className="subtitle">Давайте посмотрим, что с этого выйдет.</h2>
                <a className="scroll-down" href="#main"></a>
            </header>
        );
    }
}

export default Header;
