import React from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import './index.css'

const NewSongMobile = () => {
    return (
        <div className='new-song-container'>
            <div className="container-mb">
                <div className="header-new-song">
                    <h2 className='title'>
                        <a href="">Mới phát hành</a>
                        <KeyboardArrowRightRoundedIcon style={{ color: '#32323d', fontSize: '18px' }} />
                    </h2>
                </div>
                <div className="best-of-song">
                    <ul className="list-song">
                        <li className="list-item">
                            <div className='card'>
                                <a className='link-item mgr12' href="">
                                    <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/9/9/9/b/999b611521d71da50d2ccbc3b9418d3a.jpg" alt="" />
                                </a>
                                <div className="card-info">
                                    <a className='title-new-song' href="">Em Khóc Được Rồi</a>
                                    <div class="artist">
                                        <a href="">Phượng Vũ</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <div className='card'>
                                <a className='link-item mgr12' href="">
                                    <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/2/8/e/f28e8e80c8fc209fa9e44030e77fda58.jpg" alt="" />
                                </a>
                                <div className="card-info">
                                    <a className='title-new-song' href="">Gió Đêm Qua Đường</a>
                                    <div class="artist">
                                        <a href="">DICKSON</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <div className='card'>
                                <a className='link-item mgr12' href="">
                                    <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/2/4/d/924d8c13ac0ccaec438474199617dd01.jpg" alt="" />
                                </a>
                                <div className="card-info">
                                    <a className='title-new-song' href="">Buồn Hay Vui (feat. RPT MCK, Obito & Ronboogz)</a>
                                    <div class="artist">
                                        <a href="">Nhiều nghệ sĩ</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <div className='card'>
                                <a className='link-item mgr12' href="">
                                    <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/7/6/b/d/76bd6b5e2f1ae403c13d43931d05fd63.jpg" alt="" />
                                </a>
                                <div className="card-info">
                                    <a className='title-new-song' href="">Để Ai Cần</a>
                                    <div class="artist">
                                        <a href="">B Ray</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <div className='card'>
                                <a className='link-item mgr12' href="">
                                    <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/b/2/e/bb2ee0621a344a8121d0a3d788cd7d76.jpg" alt="" />
                                </a>
                                <div className="card-info">
                                    <a className='title-new-song' href="">Vì Sao</a>
                                    <div class="artist">
                                        <a href="">Nhiều nghệ sĩ</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <div className='card'>
                                <a className='link-item mgr12' href="">
                                    <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/c/6/1/1c61409ed32ce388920a33f4eeceef48.jpg" alt="" />
                                </a>
                                <div className="card-info">
                                    <a className='title-new-song' href="">Mash-up: Ước Gì & Mua Phi Trường</a>
                                    <div class="artist">
                                        <a href="">Nhiều nghệ sĩ</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewSongMobile;