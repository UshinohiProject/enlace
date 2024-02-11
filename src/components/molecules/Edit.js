import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
    // useLocation()を使って受け取れる
    const location = useLocation();
    const state = location.state;

    const [story, setStory] = useState('');

    // ここでstoryIDを定義または取得する
    const storyID = state.storyID;

    return (
        <div>
            <p className='center'>{state.originalStory}</p>
            <div>
                <input
                    type="text"
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                />
                <Link to="/Story" state={{ storyID: storyID, newStory: story }}>
                    <button>つむぐ</button>
                </Link>
            </div>
        </div>
    );
}
export default Edit;