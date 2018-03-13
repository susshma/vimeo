import React from 'react';
import styles from '../../index.css';

const Error = (error) => {
    return (
        <div className={styles.error}>
            Sorry something went wrong in server.
        </div>
    )
}

const EmptyChannel = () => {
    return (
        <div className={styles.error}>
            Sorry, the channel you looking for has no videos. Please search for other channels <a href="https://vimeo.com/channels">here</a>.
        </div>
    )
}

export {
    Error,
    EmptyChannel
}