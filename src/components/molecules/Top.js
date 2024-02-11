import React from 'react';
import { Link } from 'react-router-dom';
import LogoTsumugi from './img/tsumugi.png'
import './Top.css';

class Top extends React.Component {
    render() {
        return (
            <div className='center'>
                <img className="logo-tsumugi" alt='The logo of Tsumugi' src={LogoTsumugi}></img>
                <h1 className='title-tsumugi gray-text'>つむぎちゃん</h1>
                <div className='background-red radius-top'>
                    <div>
                        <p className='greeting'>丸の内線へようこそ！</p>
                    </div>
                    <div className="link-button">
                        <Link to="/Stories">
                            <button className='button-top button-tsumugu'>よむ</button>
                        </Link>
                        <Link to="/Tsumugu">
                            <button className='button-top button-read'>つむぐ</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top