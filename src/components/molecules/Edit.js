import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
    // useLocation()を使って受け取れる
    const location = useLocation();
    const state = location.state;

    // テキストボックスの状態を管理する
    const [text, setText] = useState('');

    // ここでstoryIDを定義または取得する
    const storyID = state.storyID;

    // テキストボックスの値が変更されたときに実行される関数
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const endpointUrl = 'https://script.google.com/macros/s/' + process.env.REACT_APP_TSUMUGI_MANAGING_APP_ENDPOINT_ID + '/exec';


    // フォームの送信を処理する関数
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(endpointUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text,
                    storyID: storyID
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('POST response:', data);
        } catch (error) {
            console.error('Error in POST request:', error);
        }
    };

    return (
        <div>
            <p className='center'>{state.story}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button type="submit">つむぐ</button>
            </form>
        </div>
    );
}
export default Edit;