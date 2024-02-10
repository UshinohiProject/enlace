import React from 'react';
import { Link } from 'react-router-dom';
import './Tsumugu.css';

class Tsumugu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        const url = 'https://script.google.com/macros/s/' + process.env.REACT_APP_TSUMUGI_MANAGING_APP_ENDPOINT_ID + '/exec?type=tsumugu&lineId=1';

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
        const extractedData = parsedData.stories.map(story => [story[0], story[2], story[6]]);

        return (
            <div>
                <div>
                    <h3 className='center'>物語を選んでください。</h3>
                </div>
                <div>
                    {extractedData.map((item, index) => (
                        <div className='center'>
                            {item[1]}
                            <Link to="/">
                                <button>よむ</button>
                            </Link>
                            {item[2] === false ? 
                            <Link to="/">
                                <button disabled>つむぎ中</button>
                            </Link> : 
                            <Link to="/">
                                <button>つむぐ</button>
                            </Link>
                            }
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Tsumugu