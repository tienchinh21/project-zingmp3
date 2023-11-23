import React, { useState } from 'react';
import MediaItem from '~/shared/components/MediaItem';

import './index.css';

const datNewRelease = [
    {
        imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
        title: "Dancing Queen",
        artists: ["Phí Phương Anh", "RIN9"],
        releaseTime: "Hôm qua"
    },
    {
        imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/c/3/0/3c30a4019913d4b2bd5498eaad359348.jpg",
        title: "Mần Rể Miền Tây",
        artists: ["Gin Tuấn Kiệt", "Puka"],
        releaseTime: "Hôm qua"
    },
    {
        imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/c/3/0/3c30a4019913d4b2bd5498eaad359348.jpg",
        title: "Mần Rể Miền Tây",
        artists: ["Gin Tuấn Kiệt", "Puka"],
        releaseTime: "Hôm qua"
    },
    {
        imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/c/3/0/3c30a4019913d4b2bd5498eaad359348.jpg",
        title: "Mần Rể Miền Tây",
        artists: ["Gin Tuấn Kiệt", "Puka"],
        releaseTime: "Hôm qua"
    },
]

const NewRelease = () => {
    const [activeButton, setActiveButton] = useState('all');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="new-release channel-section">
            <h3 className="title-new-release">
                Mới phát hành
                <a href="">
                    Tất cả
                    <i class="fa-solid fa-angle-right"></i>
                </a>
            </h3>
            <div className="genre-select">
                <button
                    className={`btn-release ${activeButton === 'all' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('all')}
                >
                    Tất cả
                </button>
                <button
                    className={`btn-release ${activeButton === 'vietnam' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('vietnam')}
                >
                    Việt Nam
                </button>
                <button
                    className={`btn-release ${activeButton === 'international' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('international')}
                >
                    Quốc tế
                </button>
            </div>
            <div className="columns">
                <div className="column">
                    {datNewRelease.map((item, index) => (
                        <div className="list-item" key={index}>
                            <MediaItem
                                imageUrl={item.imageUrl}
                                title={item.title}
                                artists={item.artists}
                                releaseTime={item.releaseTime}
                            />
                        </div>
                    ))}
                </div>
                <div className="column">
                    {datNewRelease.map((item, index) => (
                        <div className="list-item" key={index}>
                            <MediaItem
                                imageUrl={item.imageUrl}
                                title={item.title}
                                artists={item.artists}
                                releaseTime={item.releaseTime}
                            />
                        </div>
                    ))}
                </div>
                <div className="column">
                    {datNewRelease.map((item, index) => (
                        <div className="list-item" key={index}>
                            <MediaItem
                                imageUrl={item.imageUrl}
                                title={item.title}
                                artists={item.artists}
                                releaseTime={item.releaseTime}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default NewRelease;