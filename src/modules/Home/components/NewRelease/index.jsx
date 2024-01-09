import React, { useState } from 'react';
import MediaItem from '~/shared/components/MediaItem';
import clsx from 'clsx';

import './index.css';

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
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/4/8/c/c48cbfb8e6d694701da37eced0a35ab6.jpg",
                title: "Xin Đừng Ôm Anh",
                artists: ["Da LAB", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/2/7/c/e27cb712d10e992e617ef84867ed9f78.jpg",
                title: "Trái Tim Không Ngủ Yên",
                artists: ["Lâm Bảo Ngọc", "Hoàng Hải"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/9/9/9/b/999b611521d71da50d2ccbc3b9418d3a.jpg",
                title: "Em Khóc Được Rồi",
                artists: ["Phượng Vũ"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/2/8/e/f28e8e80c8fc209fa9e44030e77fda58.jpg",
                title: "Gió Đêm Qua Đường",
                artists: ["DICKSON", "Tiến Nguyễn"],
                releaseTime: "3 ngày trước"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/4/8/c/c48cbfb8e6d694701da37eced0a35ab6.jpg",
                title: "Xin Đừng Ôm Anh",
                artists: ["Da LAB", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/2/7/c/e27cb712d10e992e617ef84867ed9f78.jpg",
                title: "Trái Tim Không Ngủ Yên",
                artists: ["Lâm Bảo Ngọc", "Hoàng Hải"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/9/9/9/b/999b611521d71da50d2ccbc3b9418d3a.jpg",
                title: "Em Khóc Được Rồi",
                artists: ["Phượng Vũ"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/2/8/e/f28e8e80c8fc209fa9e44030e77fda58.jpg",
                title: "Gió Đêm Qua Đường",
                artists: ["DICKSON", "Tiến Nguyễn"],
                releaseTime: "3 ngày trước"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/0/7/6/007682c41e2f2088a2f1b8e559f1e7e5.jpg",
                title: "Closer Than This",
                artists: ["Jimin"],
                releaseTime: "6 ngày trước"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/4/4/a/744ac2508966984f7dea1d0189f71468.jpg",
                title: "Điều Ước Giáng Sinh",
                artists: ["O.lew"],
                releaseTime: "7 ngày trước"
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
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/4/8/c/c48cbfb8e6d694701da37eced0a35ab6.jpg",
                title: "Xin Đừng Ôm Anh",
                artists: ["Da LAB", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/2/7/c/e27cb712d10e992e617ef84867ed9f78.jpg",
                title: "Trái Tim Không Ngủ Yên",
                artists: ["Lâm Bảo Ngọc", "Hoàng Hải"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/9/9/9/b/999b611521d71da50d2ccbc3b9418d3a.jpg",
                title: "Em Khóc Được Rồi",
                artists: ["Phượng Vũ"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/2/8/e/f28e8e80c8fc209fa9e44030e77fda58.jpg",
                title: "Gió Đêm Qua Đường",
                artists: ["DICKSON", "Tiến Nguyễn"],
                releaseTime: "3 ngày trước"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/4/b/314b95c08827ed1a05306cebee5cb945.jpg",
                title: "Dancing Queen",
                artists: ["Phí Phương Anh", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/4/8/c/c48cbfb8e6d694701da37eced0a35ab6.jpg",
                title: "Xin Đừng Ôm Anh",
                artists: ["Da LAB", "RIN9"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/2/7/c/e27cb712d10e992e617ef84867ed9f78.jpg",
                title: "Trái Tim Không Ngủ Yên",
                artists: ["Lâm Bảo Ngọc", "Hoàng Hải"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/9/9/9/b/999b611521d71da50d2ccbc3b9418d3a.jpg",
                title: "Em Khóc Được Rồi",
                artists: ["Phượng Vũ"],
                releaseTime: "Hôm qua"
            },
            {
                imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/2/8/e/f28e8e80c8fc209fa9e44030e77fda58.jpg",
                title: "Gió Đêm Qua Đường",
                artists: ["DICKSON", "Tiến Nguyễn"],
                releaseTime: "3 ngày trước"
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
const countColumn = 3;

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
                {Array.from(Array(countColumn).keys()).map((value, index) => (
                    <div className="column" key={"column" + index}>
                        {filteredData &&
                            filteredData.items.slice(itemsOfColumn * index, (index + 1) * itemsOfColumn).map((item, itemIndex) => (
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
                ))}
            </div>
        </div>
    )
};

export default NewRelease;