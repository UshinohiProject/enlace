import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Edit.css';
import { FaAngleLeft } from "react-icons/fa";

const Edit = () => {
    // タイマーの初期値を秒単位で設定（3分 = 180秒）
    const [timeLeft, setTimeLeft] = useState(180);

    useEffect(() => {
        // タイムアウトが0に達したら早期リターン
        if (timeLeft === 0) return;

        // 1秒ごとに時間をデクリメント
        const timerId = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // コンポーネントのクリーンアップ時にタイマーをクリア
        return () => clearTimeout(timerId);
    }, [timeLeft]);

    // 分と秒を計算
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // 表示用の文字列を生成（秒が10未満の場合は先頭に0を追加）
    const displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    // useLocation()を使って受け取れる
    const location = useLocation();
    const state = location.state;

    const [story, setStory] = useState('');

    // ここでstoryIDを定義または取得する
    const storyID = state.storyID;

    return (
        <div>
            <p className='background-red time-remaining text-white center'>のこり {displayTime}</p>
            <p className='inputed-story-box'>{state.originalStory}</p>
            <div className='edit-box'>
                <input
                    type="text"
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    id="large-textbox"
                />
                <div className="div-right-align">
                    <Link to="/Story" state={{ storyID: storyID, newStory: story }}>
                        <button className='button-top-3'>つむぐ</button>
                    </Link>
                </div>
            </div>
            <div className='button-back'>
                <Link to="/Tsumugu">
                    <button>
                        <div className='fa-angle-left'>
                            <FaAngleLeft />
                        </div>
                        戻る
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Edit;