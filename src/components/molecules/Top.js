import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css';

class Top extends React.Component {
    render() {
        return (
            <div className='center'>
                <h1>つむぎちゃん</h1>
                <div className="link-button">
                    <Link to="/Tsumugu">
                        <button>つむぐ</button>
                    </Link>
                </div>
                {/* `/Bookshelf`へ遷移 */}
                <div className="link-button">
                    <Link to="/Stories">
                        <button>よむ</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Top