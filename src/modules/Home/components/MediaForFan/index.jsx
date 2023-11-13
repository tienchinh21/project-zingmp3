import React from 'react';

import './index.css';

const MediaForFan = ({ imageUrl, subtitle, title }) => {
    return (
        <div className="media-fan">
            <div className="media-left">
                <a href="">
                    <img src={imageUrl} alt="" />
                </a>
            </div>
            <div className="media-content">
                <h3 className="subtitle">{subtitle}</h3>
                <h3 className="title-fan">
                    <a href="">{title}</a>
                </h3>
            </div>
        </div>
    );
};

export default MediaForFan;
