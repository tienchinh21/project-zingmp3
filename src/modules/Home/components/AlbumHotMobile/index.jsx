import React from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import './index.css';

const AlbumHotMobile = () => {
    return (
        <div className='album-container'>
            <div className="container-mb">
                <div className="header-new-song">
                    <h2 className="title">
                        <a href="">
                            Album hot
                            <KeyboardArrowRightRoundedIcon style={{ color: '#32323d', fontSize: '18px' }} />
                        </a>
                    </h2>
                </div>
                <div className="more-list-album">
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/a/6/1/0a61f6f51223a7931fb0e509d3555710.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Em Khóc Được Rồi (Single)</a>
                                <a class="artist" href="">Phượng Vũ</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/5/9/9/a5996aa4a7b4f152be0f4ff4f2e8fc33.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Với Em Anh Là Gì (Single)</a>
                                <a class="artist" href="">Hoàng Anh Duy</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/0/c/4/a0c4c1e18c960fc4c1bf6d6228821e3a.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Chỉ Là Quá Yêu Em (Single)</a>
                                <a class="artist" href="">Quang Đăng Trần</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/a/9/5/aa954b5fd7ba673667b4b465de36f71c.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Nói Ra Thì Tốt Hơn (Single)</a>
                                <a class="artist" href="">Viet Lee</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-album">
                        <div className="album">
                            <a href="">
                                <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/7/b/9/a7b987db4245b2d7c014296c99a7731d.jpg" alt="" />
                            </a>
                            <div className="card-info">
                                <a className='title-new-song' href="">Em Đã Nói Trước (Single)</a>
                                <a class="artist" href="">Hana Cẩm Tiên,</a>
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

export default AlbumHotMobile;