import React from 'react';
import './LoadingSpinner.css';

class LoadingSpinner extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="loading-spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        )
    }
}

export default LoadingSpinner;
