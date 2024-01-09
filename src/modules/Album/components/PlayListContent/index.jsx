// import React from 'react';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

import './index.css';
import { Typography } from '@mui/material';
import LyricsIcon from '@mui/icons-material/Lyrics';

const PlayListContent = () => {


    return (
        <div className="play-list-content">
            <div className="song-list-select">
                <div className="select-header">
                    <div className="left-btn">
                        <FilterListRoundedIcon style={{ color: 'hsla(0,0%,100%,0.5)', fontSize: '16px', marginRight: '10px' }} />
                        <div class="column-text">Bài hát</div>
                    </div>
                    <div className="center-btn">
                        <div class="column-text">Album</div>
                    </div>
                    <div className="right-btn">
                        <div class="column-text">THỜI GIAN</div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="list-remcommend list-music-wrapper">
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            {/* <LyricsIcon style={{ color: 'hsla(0,0%,100%,0.5)' }} /> */}
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item bor-b-1">
                    <div className="media">
                        <div className="media-left">
                            <div className="song-thumb">
                                <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/4/5/6/a45667d4601aa49dfdc8e1a11512b280.jpg" alt="" />
                                <div className="opacity"></div>
                                <div className="actions-container">
                                    <button class="play-icon"><i class="i-play fa-solid fa-play"></i></button>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="title">Sunset in the City</div>
                                <h3 className="subtitle">
                                    <a href="">SOOBIN</a>
                                </h3>
                            </div>
                        </div>
                        <div className="media-center">
                            <a className="album-info">Sunset in the City (Single)</a>
                        </div>
                        <div className="media-right">
                            <div className="hover-item-music">
                                <div className="level">
                                    <div className="level-item"><button className="btn-item mic"><i class="icon fa-solid fa-microphone"></i></button></div>
                                    <div className="level-item"><button className="btn-item heart"><i class="icon fa-regular fa-heart"></i></button></div>
                                    <div className="level-item"><button className="btn-item more"><i class="icon fa-solid fa-ellipsis"></i></button></div>
                                </div>
                            </div>
                            <div className="actions-item-music">
                                <div className="duration">03:44</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayListContent;