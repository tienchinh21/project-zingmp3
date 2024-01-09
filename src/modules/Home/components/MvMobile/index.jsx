import React from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import './index.css';

const MvMobile = () => {
    return (
        <div className='album-container'>
            <div className='container-mb'>
                <div className="header-new-song">
                    <h2 className="title">
                        <a href="">
                            MV
                            <KeyboardArrowRightRoundedIcon style={{ color: '#32323d', fontSize: '18px' }} />
                        </a>
                    </h2>
                </div>
                <div className="more-list-album">
                    <div className="item-album item-mv">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Bài Hát Nhạc Trẻ Hay Nhất</a>
                                <a class="artist" href="">Nhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album item-mv">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/6/8/9/b/689b9f49c7ceb4ca4dc326571bba4e2a.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Nhạc Trữ Tình Hay Nhất</a>
                                <a class="artist" href="">HNhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album item-mv">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/4/7/7/5/47755662b9802742229217de267b24fe.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Nhạc Thiếu Nhi Hay Nhất</a>
                                <a class="artist" href="">Nhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album item-mv">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/4/d/b/f/4dbf769079e956c3d104130af83ae2c5.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Nhạc Không Lời Việt Nam Hay Nhất</a>
                                <a class="artist" href="">Nhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album item-mv">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/0/c/e/5/0ce507ca0dac1fbed87fd1bd1f88273a.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Top 100 Cải Lương Hay Nhất</a>
                                <a class="artist" href="">Nhiều nghệ sĩ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MvMobile;