import React from 'react';

import './styles.css';

function LoadingPage({ text }) {
    return (
        <div className="loading-component screen-centered">
            <div className="spinner-border"></div>
            <p>{text}</p>
        </div>
    )
}

export default LoadingPage;