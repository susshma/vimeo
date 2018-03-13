import React from 'react';
import ReactDOM from 'react-dom';
import styles from './_playerContainer.css';
import Player from '@vimeo/player';

class PlayerContainer extends React.Component {
    state = {
        player: {}
    }

    componentWillReceiveProps(nextProps) {
        var player_el = document.getElementById('player_container');
        const player = new Player(player_el, {
            id: 258951591,
            width: 1000,
            autoplay: true
        });
        var video_id = nextProps.video.uri;
        video_id = video_id.replace("/videos/", "");

        player.loadVideo(video_id).then(function(){
            console.log(video_id);
            console.log('video loaded');
        })
    }

    render () {
        const { video } = this.props;
        return (
            <div>
                <div className={styles.player} id="player_container">
                </div>
                <div className={styles.active_video}>
                    <div className={styles.video__name}>{video.name}</div>
                    <div className={styles.video__user}>{video.user.name}</div>
                </div>
                <div className={styles.video__description}>
                    {video.description}
                </div>
            </div>  
        )
    }
}

export default PlayerContainer;
