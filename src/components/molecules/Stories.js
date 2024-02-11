import React from 'react';
import { Link } from 'react-router-dom';
import './Stories.css';
import { FaAngleLeft } from "react-icons/fa";

class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        const url = 'https://script.google.com/macros/s/' + process.env.REACT_APP_TSUMUGI_MANAGING_APP_ENDPOINT_ID + '/exec?type=stories&lineId=1';

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => this.setState({ data: data, isLoading: false }))
            .catch(error => this.setState({ error: error, isLoading: false }));
    }
    render() {
        const { data, isLoading, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        const jsonData = JSON.stringify(data, null, 2);
        // JSONデータをパース
        const parsedData = JSON.parse(jsonData);

        // 新しい多次元リストを作成
        const extractedData = parsedData.stories.map(story => [story[0], story[2], story[3]]);

        return (
            <div className='background-red'>
                <div>
                    <h3 className='center story-title text-white'>物語を選んでください。</h3>
                </div>
                <div className='background-white stories-box border-radius'>
                    {extractedData.map((item, index) => (
                        <div className='center'>
                            <Link to="/Story" state={{ storyID: item[0] }}>
                                <button className='button-story'>{item[1]}</button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='button-back'>
                    <Link to="/">
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
}

export default Stories;