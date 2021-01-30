import React from 'react';

import './styles.css';

function LoadingPage() {
    return (
        <div className="loading-component screen-centered">
            <div className="spinner-border"></div>
            <p>Loading</p>
        </div>
    )
}

export default LoadingPage;