import React from 'react';
import { Tooltip } from '@mui/material';

import './index.css';
import '../../../assets/style/common.css'

const PlayerListSong = () => {
    return (
        <div className='player-list-song'>
            <div className="player-container">
                <div className="header-bar">
                    <div className="tab-bar">
                        <div className="bar-left">
                            <div className="item open">
                                <h6 class="list-title">Danh sách phát</h6>
                            </div>
                            <div className="item">
                                <h6 class="has-text-white">Nghe gần đây</h6>
                            </div>
                        </div>
                        <div className="bar-right">
                            <div className="item">
                                <Tooltip title='Hẹn giờ dừng phát nhạc' arrow>
                                    <button><i class="fa-regular fa-clock"></i></button>
                                </Tooltip>
                            </div>
                            <div className='item'>
                                <Tooltip title='Khác' arrow>
                                    <button><i class="fa-solid fa-ellipsis"></i></button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="playlist-scroll">
                    <div className='item-pinned'>
                        <div className="list-item">
                            <div className="media active-song">
                                <div className="media-left">
                                    <div className="song-thumb">
                                        <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/e/3/b/e/e3bedbd63ca1e3dd7593f6d4ee93c84a.jpg" alt="" />
                                        <div class="opacity "></div>
                                        <div class="actions-container"><button class="play-icon"><i class="i-play fa-solid fa-play"></i></button></div>
                                    </div>
                                    <div class="card-info">
                                        <div class="title-wrapper">Từng Quen</div>
                                        <div class="subtitle">
                                            <a href="">Wren Evans</a>,
                                            <a href="">Itsnk</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="media-right">
                                    <div class="hover-item-music">
                                        <div class="level">
                                            <div class="level-item">
                                                <button class="btn-item more">
                                                    <i class="icon fa-solid fa-ellipsis"></i>
                                                </button>
                                            </div>
                                            <div className="level-item">
                                                <button class="btn-item more">
                                                    <i class="icon fa-regular fa-heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='next-songs'>
                            <h3 class="title is-6">Tiếp theo</h3>
                            <h3 class="subtitle is-6">
                                <span>Từ playlist</span>
                                <a class="" href="">Giai Điệu Chữa Lành</a>
                            </h3>
                        </div>
                    </div>
                    <div style={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100 %',
                        height: '100 %',
                    }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerListSong;