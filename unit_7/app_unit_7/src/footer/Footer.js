import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        const contacts = this.props.contacts;
        const address = this.props.address;
        return (
            <footer className="app-footer">
                <ul>
                    {contacts.map(contact => {
                        return <li>{contact}</li>
                    })}
                </ul>
                <ul>
                    <li>Город: {address[0]}</li>
                    <li>Улица: {address[1]}</li>
                    <li>Дом - Офис: {address[2]}</li>
                </ul>
                <p className="copyrights">{this.props.copyrights}</p>
            </footer>
        );
    }
}

export default Footer;
