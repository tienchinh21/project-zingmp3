import React, { useState } from 'react';

import './index.css';

const PlayerControl = () => {
    const [timeSong, setTimeSong] = useState(0);
    const [volume, setVolumeSong] = useState(0);

    const handleChangeSong = (e) => {
        setTimeSong(e.target.value);
    };
    const handleChangeVolume = (e) => {
        setVolumeSong(e.target.value);
    };
    return (
        <div className='player-control'>
            <div className="f-al-c player-control-wrapper">
                <div className="player-control-left">
                    <div className="level-item">
                        <div className="media">
                            <div className="player-media-left">
                                <a className='thumbnail' href="">
                                    <img className='w100' src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/banner/e/3/b/e/e3bedbd63ca1e3dd7593f6d4ee93c84a.jpg" alt="" />
                                </a>
                            </div>
                            <div className="player-media-content">
                                <div className="title">
                                    <a className='song-name' href="">Cơn Mưa Rào</a>
                                </div>
                                <div className="subtitle">
                                    <a href="">Văn Mai Hương,</a>
                                    <a href=""> Negav</a>
                                </div>
                            </div>
                            <div className="player-media-right">
                                <div className="level">
                                    <div className="level-item">
                                        <button class="btn like"><i class="icon fa-regular fa-heart"></i></button>
                                        <button class="btn dot icon-more"><i class="icon fa-solid fa-ellipsis"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="player-control-center">
                    <div className="level-item">
                        <div className="player-action">
                            <button><i class="fs16px pd5 fa-solid fa-shuffle"></i></button>
                            <button><i class="fs16px pd5 fa-solid fa-backward"></i></button>
                            {/* <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button> */}
                            <button><i class="i-play fa-regular fa-circle-play"></i></button>
                            <button><i class="fs16px pd5 fa-solid fa-forward"></i></button>
                            <button><i class="fs16px pd5 fa-solid fa-repeat"></i></button>
                        </div>
                    </div>
                    <div className="level-item mgb-5 mgt-5">
                        <span class="time left">00:02</span>
                        <input type="range" min="0" max="100" value={timeSong} onChange={handleChangeSong}
                            style={{
                                background: `linear-gradient(to right, #fff 0%, #fff ${timeSong}%, hsla(0,0%,100%,0.3) ${timeSong}%, hsla(0,0%,100%,0.3) 100%)`,
                                appearance: 'none',
                                width: '100%',
                                height: '4px',
                                borderRadius: '5px',
                                outline: 'none',
                            }}
                            onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                        />
                        <span class="time right">03:45</span>
                    </div>
                </div>
                <div className="player-control-right">
                    <div className="level-item">
                        <button>
                            <i class="fa-solid fa-tv"></i>
                        </button>
                    </div>
                    <div className="level-item">
                        <button>
                            <i class="fa-solid fa-microphone"></i>
                        </button>
                    </div>
                    <div className="level-item">
                        <button>
                            <i class="fa-regular fa-window-restore"></i>
                        </button>
                    </div>
                    <div className="level-item" style={{ justifyContent: 'left' }}>
                        <div className="volume">
                            <button>
                                <i class="fa-solid fa-volume-low"></i>
                            </button>
                        </div>
                        <input type="range" min="0" max="100" value={volume} onChange={handleChangeVolume}
                            style={{
                                background: `linear-gradient(to right, #fff 0%, #fff ${volume}%, hsla(0,0%,100%,0.3) ${volume}%, hsla(0,0%,100%,0.3) 100%)`,
                                appearance: 'none',
                                width: '60px',
                                height: '4px',
                                borderRadius: '5px',
                                outline: 'none',
                            }}
                            onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                        />
                    </div>
                    <div class="level-item">
                        <span class="divide">
                        </span>
                    </div>
                    <div className="list-item">
                        <button className='list'>
                            <i class="fa-solid fa-list"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerControl;


