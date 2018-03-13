import React from 'react';
import styles from './_spinner.css';

const Loader = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles.spinner__item1}></div>
            <div className={styles.spinner__item2}></div>
            <div className={styles.spinner__item3}></div>
        </div>
    )
}

export default Loader;