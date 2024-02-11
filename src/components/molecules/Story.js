import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Story.css';

const Story = () => {
    // useLocation()を使って受け取れる
    const location = useLocation();
    const state = location.state;

    // ここでstoryIDを定義または取得する
    const storyID = state.storyID;

    const [data, setData] = useState(null);

    var endpointUrl = 'https://script.google.com/macros/s/' + process.env.REACT_APP_TSUMUGI_MANAGING_APP_ENDPOINT_ID + '/exec?type=story&lineId=1&storyID=' + storyID;
    if (state.newStory) {
        endpointUrl = endpointUrl + '&newStory=' + state.newStory;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpointUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [endpointUrl]);

    return (
        <div>
            <h3 className='center'>{data ? <div>{JSON.stringify(data[2], null, 2)}</div> : 'Loading...'}</h3>
            <div>
                <div className='story-box center'>
                    {data ? <div>{JSON.stringify(data[3], null, 2)}</div> : 'Loading...'}
                </div>
            </div>
        </div>
    );
}
export default Story;