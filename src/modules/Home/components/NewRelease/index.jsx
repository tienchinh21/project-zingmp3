import React, { useState } from 'react';
import MediaItem from '~/shared/components/MediaItem';
import clsx from 'clsx';

import './index.css';

const SplitArr = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    return result;
};

// const dataNewRelease = [
//     {
//         imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
//         title: "Dancing Queen",
//         artists: ["Phí Phương Anh", "RIN9"],
//         releaseTime: "Hôm qua"
//     },
//     {
//         imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
//         title: "Dancing Queen",
//         artists: ["Phí Phương Anh", "RIN9"],
//         releaseTime: "Hôm qua"
//     },
//     {
//         imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
//         title: "Dancing Queen",
//         artists: ["Phí Phương Anh", "RIN9"],
//         releaseTime: "Hôm qua"
//     },
//     {
//         imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
//         title: "Dancing Queen",
//         artists: ["Phí Phương Anh", "RIN9"],
//         releaseTime: "Hôm qua"
//     },
//     {
//         imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
//         title: "Dancing Queen",
//         artists: ["Phí Phương Anh", "RIN9"],
//         releaseTime: "Hôm qua"
//     },

// ]


const dataNewRelease = [
    {
        category: 'all',
        items: [
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
        ]
    },
    {
        category: 'vietnam',
        items: [
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
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/c/3/0/3c30a4019913d4b2bd5498eaad359348.jpg",
                title: "Mần Rể Miền Tây",
                artists: ["Gin Tuấn Kiệt", "Puka"],
                releaseTime: "Hôm qua"
            },

        ]
    },
    {
        category: 'international',
        items: [
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
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },

        ]
    },
]

const itemsOfColumn = 4;

const songsGroups = SplitArr(dataNewRelease, itemsOfColumn);

const NewRelease = () => {
    const [selectedButton, setSelectedButton] = useState('all');


    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };
    const filteredData = dataNewRelease.find((category) => category.category === selectedButton);

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
                    className={clsx('btn-release', { 'active': selectedButton === 'all' })}
                    onClick={() => handleButtonClick('all')}
                >
                    Tất cả
                </button>

                <button
                    className={clsx('btn-release', { 'active': selectedButton === 'vietnam' })}
                    onClick={() => handleButtonClick('vietnam')}
                >
                    Việt Nam
                </button>

                <button
                    className={clsx('btn-release', { 'active': selectedButton === 'international' })}
                    onClick={() => handleButtonClick('international')}
                >
                    Quốc tế
                </button>
            </div>
            <div className="columns">
                {/* {songsGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="column">
                        {group.map((item, itemIndex) => (
                            <div className="list-item">
                                <MediaItem
                                    key={itemIndex}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    artists={item.artists}
                                    releaseTime={item.releaseTime}
                                />
                            </div>
                        ))}
                    </div>
                ))} */}
                <div className="column">
                    {filteredData &&
                        filteredData.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="list-item">
                                <MediaItem
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    artists={item.artists}
                                    releaseTime={item.releaseTime}
                                />
                            </div>
                        ))}
                </div>
                {/* {songsGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="column">
                        {group.map((item, itemIndex) => (
                            <div className="list-item">
                                <MediaItem
                                    key={itemIndex}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    artists={item.artists}
                                    releaseTime={item.releaseTime}
                                />
                            </div>
                        ))}
                    </div>
                ))} */}

            </div >
        </div >
    )
};

export default NewRelease;