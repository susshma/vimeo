import React from 'react';
import ReactDOM from 'react-dom';
import styles from './_playlist.css';
import Player from '@vimeo/player';
import getVideos from '../../src/api/endpoints';

class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.playlist !== nextProps.playlist) {
            this.setState({
                playlist: nextProps.playlist
            })
        }
    }

    render () {
        const { playlist, currentVideo } = this.props; 
        const playList = playlist.map(function(video) {
            let videoClass = video === currentVideo ? styles.video__active : styles.video;
            return (
                <div key={video.name} className={styles.video__wrapper} onClick={()=>{this.props.selectVideo(video)}}>
                    <div className={videoClass}>
                        <img src={video.pictures.sizes[0].link} alt='{video.name} image' />
                    </div>
                    <div className={styles.video__info}>
                        <span className={styles.name}>{video.name}</span>
                        <div className={styles.user}>{video.user.name}</div>
                    </div>
                </div>
            )
        }, this)
        return (
            <div className={styles.playlist__wrapper}>
                {playList}
            </div>
        )
    }
}

export default Playlist; 