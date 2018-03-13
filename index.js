import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import Player from '@vimeo/player';
import getVideos from './src/api/endpoints';
import Playlist from './src/components/playlist';
import PlayerContainer from './src/components/playerContainer';
import Loader from './src/components/loader';
import { Error, EmptyChannel } from './src/components/noresponse';

class Container extends React.Component {

    state = {
        currentVideo: {
            name: "",
            user: {
                name: ""
            }
        },
        isLoading: true,
        playlist: [],
        errorResponse: false,
        error: ''
    }

    componentDidMount() {
        const playlist = getVideos().then(res => {
            this.setState({
                currentVideo: res.data.data[0],
                playlist: res.data.data,
                isLoading: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                errorResponse: true,
                isLoading: false,
                error: err
            })
        });
    }

    selectVideo = (video) => {
        this.setState({
            currentVideo: video
        })
    }

    render () {
        const { currentVideo, playlist, isLoading, errorResponse, error } = this.state;
        const loader = isLoading ? <Loader /> : ""
        const noresponse = !error && playlist.length === 0 && !isLoading ? <EmptyChannel /> : "";
        const error_response = error && !isLoading ? <Error  /> : "";
        return (
            <div className="container">
                <header>
                    <div className={styles.brand}></div>
                    <div className={styles.nav}>
                        <img src="assets/images/vimeo-logo.png" alt="vimeo-logo" width="100px" />
                    </div>
                </header>
                <content>
                    {loader}
                    {noresponse || error_response ||
                        <div className={styles.flex}>
                            <PlayerContainer video={currentVideo} />
                            <Playlist currentVideo={currentVideo} playlist={playlist} selectVideo={this.selectVideo}/>
                        </div>
                    }
                </content>
                <footer></footer>
            </div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.querySelector('main')
);