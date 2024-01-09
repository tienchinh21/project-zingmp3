import React from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import './index.css';

const Top100Mobile = () => {
    return (
        <div className='album-container'>
            <div className='container-mb'>
                <div className="header-new-song">
                    <h2 className="title">
                        <a href="">
                            Top 100
                            <KeyboardArrowRightRoundedIcon style={{ color: '#32323d', fontSize: '18px' }} />
                        </a>
                    </h2>
                </div>
                <div className="more-list-album">
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/b/f/5/1bf5ddb1bb13570f5cc58ca0eef83aeb.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Bài Hát Nhạc Trẻ Hay Nhất</a>
                                <a class="artist" href="">Nhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/9/d/b/b9db1f2a4c4909666b414adde536e147.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Nhạc Trữ Tình Hay Nhất</a>
                                <a class="artist" href="">HNhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/6/e/8/36e831358246203cbc056e4a8f4daa6e.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Nhạc Thiếu Nhi Hay Nhất</a>
                                <a class="artist" href="">Nhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/5/8/8/d588becc28ad769d07f6bec6cd4ba2e0.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Nhạc Không Lời Việt Nam Hay Nhất</a>
                                <a class="artist" href="">Nhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/1/b/1/91b1bb8b5419bf72f7fcc899626f7ec4.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Cải Lương Hay Nhất</a>
                                <a class="artist" href="">Nhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/b/5/7/6b572b3bbca4a8a4d33d991f79da82a6.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Chung Một Chuyến Xe (Single)</a>
                                <a class="artist" href="">Tony Trí Đạt</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top100Mobile;