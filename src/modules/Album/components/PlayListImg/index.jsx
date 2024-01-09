import React from 'react';
import { Tooltip } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import './index.css';

const PlayListImg = () => {
    return (
        <>
            <div className='alb-media-left'>
                <div className="alb-header-thumbnail">
                    <div className='link-item'>
                        <div className="card-img">
                            <img className='w100 d-block' src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg" alt="" />
                            <div className='opacity'></div>
                            <div className='actions actions-container'>
                                <div className='playlist-actions'>
                                    <button className='play-icon'>
                                        <i class="i-play fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="alb-media-content">
                    <div className="content-top">
                        <h3 class="title">Acoustic Thư Giãn</h3>
                        <div class="release">Cập nhật: 26/10/2023</div>
                        <div className='artists'>
                            <a href="">Thịnh Suy,</a>
                            <a href=""> AMEE,</a>
                            <a href=""> Phạm Nguyên Ngọc,</a>
                            <a href=""> Hoàng Dũng</a>
                        </div>
                        <div class="like">67K người yêu thích</div>
                    </div>
                    <div className="btn-actions">
                        <button className='btn-playlist btn-active'>
                            <PlayArrowRoundedIcon />
                            <span>Phát ngẫu nhiên</span>
                        </button>
                        <div className="level">
                            <div className="level-item mgr12">
                                <Tooltip title='Thêm vào thư viện' arrow placement='top'>
                                    <button className='btn like'>
                                        <i class="icon fa-regular fa-heart"></i>
                                    </button>
                                </Tooltip>
                            </div>
                            <div className="level-item">
                                <Tooltip title='Khác' arrow placement='top'>
                                    <button className='btn dot icon-more'>
                                        <i className="icon fa-solid fa-ellipsis"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PlayListImg;