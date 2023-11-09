import { IconPlay } from '~/shared/Svgs';

import './index.css';

const ChartHome = () => {
    return (
        <div className="chart-home channel-section">
            <div class="bg-blur"></div>
            <div className="bg-alpha"></div>
            <div className="header">
                <a href="">#zingchart</a>
                <button className='btn-chart'><IconPlay /></button>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="list">
                        <div className="chart-song">
                            <div className="list-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className='song-prefix'>
                                            <span className='number is-top-1'>1</span>
                                        </div>
                                        <div className='song-thumb'>
                                            <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/f/0/1/bf0182328238f2a252496a63e51f1f74.jpg" alt="" />
                                            <div className="opacity"></div>
                                            <div className="actions-container">
                                                <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <div className='title-wrapper'>Cắt Đôi Nỗi Sầu</div>
                                            <div className='subtitle'>
                                                <a href="">Tăng Duy Tân,</a>
                                                <a href=""> Drum7</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-right">
                                        <div className="hover-item">53%</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="chart-song">
                            <div className="list-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className='song-prefix'>
                                            <span className='number is-top-2'>2</span>
                                        </div>
                                        <div className='song-thumb'>
                                            <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/f/a/7/2fa7217d7ba558e5f9ab43b267e7de5e.jpg" alt="" />
                                            <div className="opacity"></div>
                                            <div className="actions-container">
                                                <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <div className='title-wrapper'>Từng Quen</div>
                                            <div className='subtitle'>
                                                <a href="">Wren Evans,</a>
                                                <a href=""> Itsnk</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-right">
                                        <div className="hover-item">22%</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="chart-song">
                            <div className="list-item">
                                <div className="media">
                                    <div className="media-left">
                                        <div className='song-prefix'>
                                            <span className='number is-top-3'>3</span>
                                        </div>
                                        <div className='song-thumb'>
                                            <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/f/4/1/6f412fff2959cf4b59df9fef77bd638a.jpg" alt="" />
                                            <div className="opacity"></div>
                                            <div className="actions-container">
                                                <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <div className='title-wrapper'>Tất Cả Hoặc Không Là Gì Cả</div>
                                            <div className='subtitle'>
                                                <a href="">Cao Thái Sơn,</a>
                                                <a href="">Đông Thiên Đức</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-right">
                                        <div className="hover-item">38%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-center">
                        <a className='show-more' href="">Xem thêm</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChartHome;