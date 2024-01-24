import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Collapse from '@mui/material/Collapse';
import { Avatar } from '@mui/material';

import { FooterMb, HeaderMb } from '~/layouts/MainLayout/components';
import './index.css';
import { NewSongMobile, AlbumHotMobile, Top100Mobile } from '~/modules/Home/components';
import { Block, NotificationsPausedTwoTone } from '@mui/icons-material';

const drawerWidth = 300;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleChange = () => {
        setChecked((prev) => !prev);
    };



    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const popUpSearch = (
        <div className='popup' style={{ color: "#333" }}>
            <p>hello</p>
        </div>
    )

    const drawer = (
        <>
            <div className='user-profile-container'>
                <div className="card-user">
                    <a href="" className="thumb">
                        <img className='w100' src="https://s120-ava-talk-zmp3.zmdcdn.me/5/6/5/8/2/120/2d9105fc837020366dce516d381f4b3e.jpg" alt="" />
                    </a>
                    <div className="card-info">
                        <div className="title">
                            <a className='user-name' href="">Chính Nguyễn</a>
                            <div className="user-actions">
                                <a className='btn-buy-vip btn-actions' href="">Nâng cấp Premium</a>
                                <a className='btn-buy-vip btn-actions' style={{ background: 'transparent', boxShadow: '0 0 0 1px black' }} href="">Nhập code Premium</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-content">
                <ul>
                    <li className="list-item-mobile">
                        <a href="" className="item-menu active-menu">
                            <i class="icon-menu fa-solid fa-house"></i>
                            Trang Chủ
                        </a>
                    </li>
                    <li className="list-item-mobile">
                        <a href="" className="item-menu">
                            <i class="icon-menu fa-solid fa-chart-line"></i>
                            #Zingchart
                        </a>
                    </li>
                    <li className="list-item-mobile">
                        <a href="" className="item-menu">
                            <i class="icon-menu fa-solid fa-music"></i>
                            Mới phát hành
                        </a>
                    </li>
                    <li className="list-item-mobile">
                        <a href="" className="item-menu">
                            <i class="icon-menu fa-solid fa-ranking-star"></i>
                            Top 100
                        </a>
                    </li>
                    <li className="list-item-mobile">
                        <a href="" className="item-menu">
                            <i class="icon-menu fa-regular fa-comment"></i>
                            Chủ đề
                        </a>
                    </li>
                    <li className="list-item-mobile">
                        <a href="" className="item-menu">
                            <i class="icon-menu fa-brands fa-youtube"></i>
                            MV
                        </a>
                    </li>
                    <li className="list-item-mobile border-bottom">
                        <a href="" className="item-menu">
                            <i class="icon-menu fa-solid fa-compact-disc"></i>
                            Album
                        </a>
                    </li>
                    <li className="list-item-mobile border-bottom">
                        <a href="" className="item-menu">
                            <i class="icon-menu fa-solid fa-right-from-bracket"></i>
                            Đăng xuất
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', position: 'relative' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `100%` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar
                    sx={{
                        px: '0pc !important'
                    }}
                >
                    <div className='header-mb'>
                        <div className="top-bar-container">
                            <div className="top-bar">
                                <div className="menu-slide mgl12">
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        sx={{ mr: 2, display: { md: 'none' } }}
                                    >
                                        <MenuIcon sx={{ color: '#333' }} />
                                    </IconButton>
                                </div>
                                <h1>
                                    <a className='logo' href="">Zing mp3</a>
                                </h1>
                                <div className={`menu-bar-container ${showPopup ? 'none' : 'block'}`}>
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
                                        <i className="fa-solid fa-magnifying-glass" onClick={togglePopup}></i>
                                    </div>
                                    <Avatar sx={{ width: '30px', height: '30px' }} src='https://s120-ava-talk-zmp3.zmdcdn.me/5/6/5/8/2/120/2d9105fc837020366dce516d381f4b3e.jpg' />
                                </div>

                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}

            >
                {drawer}
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, display: showPopup ? 'none' : 'block' }}
            >
                <NewSongMobile />
                <AlbumHotMobile />
                <Top100Mobile />
                {/* <Collapse in={checked}>{popUpSearch}</Collapse> */}
            </Box>
            {showPopup && (
                // <div className="popup">
                //     <div className="container-popup" style={{ color: '#333', paddingLeft: '20px', paddingRight: '20px', display: 'block' }}>
                //         <div className="search-popup-wrapper">
                //             <div className="header-search">
                //                 <div className="input-gr">
                //                     <label htmlFor="" className='label-input'>
                //                         <i class="fa-solid fa-magnifying-glass"></i>
                //                         <form action="">
                //                             <input type="text" placeholder='Tìm kiếm' />
                //                         </form>
                //                     </label>
                //                 </div>
                //             </div>
                //             <div className="hot-key-search">
                //                 <div>
                //                     <div className="sub-title">Hot Key</div>
                //                     <div className="list-search">
                //                         <a href="">sau lưng anh</a>
                //                         <a href="">Bài hát về mẹ</a>
                //                         <a href=""> Lần cuối yêu nhau</a>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                <div className="popup">
                    <div className="popup-content">

                        <div className="container-popup" style={{ color: '#333', paddingLeft: '20px', paddingRight: '20px', display: 'block' }}>
                            <div className="search-popup-wrapper">
                                <div className="header-search">
                                    <div className="input-gr">
                                        <label htmlFor="" className='label-input'>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            <form className='form-search' action="">
                                                <input type="text" placeholder='Tìm kiếm' />
                                            </form>
                                        </label>
                                    </div>
                                </div>
                                <div className="hot-key-search">
                                    <div>
                                        <div className="sub-title">Hot Key</div>
                                        <div className="list-search">
                                            <a href="">sau lưng anh</a>
                                            <a href="">Bài hát về mẹ</a>
                                            <a href=""> Lần cuối yêu nhau</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* <FooterMb /> */}
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
