import React from 'react';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import { Avatar } from '@mui/material';
import './index.css'

const HeaderMb = () => {
    return (
        <div className='header-mb'>
            <div className="top-bar-container">
                <div className="top-bar">
                    <div className="menu-slide mgl12">
                        <SortRoundedIcon style={{ color: '#333' }} />
                    </div>
                    <h1>
                        <a className='logo' href="">Zing mp3</a>
                    </h1>
                    <div className="menu-bar-container">
                        <ul className="nav">
                            <li>
                                <a className='nav-link active' href="">trang chủ</a>
                            </li>
                            <li>
                                <a className='nav-link' href="">#zing-chart</a>
                            </li>
                            <li>
                                <a className='nav-link' href="">nhạc cá nhân</a>
                            </li>
                        </ul>
                    </div>
                    <div className="user-profile">
                        <div className='icon-search-mb mgr12'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <Avatar sx={{ width: '30px', height: '30px' }} src='https://s120-ava-talk-zmp3.zmdcdn.me/5/6/5/8/2/120/2d9105fc837020366dce516d381f4b3e.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMb;