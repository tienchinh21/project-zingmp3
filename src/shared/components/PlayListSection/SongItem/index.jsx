import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PopupMenu from '~/shared/components/PopupMenu';
import { Box, ClickAwayListener, Popper, Tooltip } from '@mui/material';

const SongItem = ({ item, style, className }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMoreClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        console.log(event);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'poper-' + item.id : undefined;

    const handleClick = (event) => {
        event.preventDefault();
    };

    return (
        <div className={className} style={{ ...style }}>
            <div className="playlist-wrapper">
                <div className="card">
                    <div>
                        <a className='link-item' href="" onClick={handleClick}>
                            <div className="card-image">
                                <img src={item.image} />
                                <div className='opacity'></div>
                                <div className='actions actions-container'>
                                    <div className='playlist-actions'>
                                        <Tooltip title='Thêm vào thư viện' arrow>
                                            <button className='btn like'>
                                                <i class="icon fa-regular fa-heart"></i>
                                            </button>
                                        </Tooltip>
                                        <button className='play-icon'>
                                            <i class="i-play fa-solid fa-play"></i>
                                        </button>
                                        <Tooltip title='Khác' arrow>
                                            <button aria-describedby={id} className='btn dot icon-more' onClick={handleMoreClick}>
                                                <i className="icon fa-solid fa-ellipsis"></i>
                                            </button>
                                        </Tooltip>
                                        <Popper id={id} open={open} anchorEl={anchorEl}
                                            sx={{ zIndex: 10 }}
                                            placement="right-start"
                                            disablePortal={false}
                                            modifiers={[
                                                {
                                                    name: 'flip',
                                                    enabled: true,
                                                    options: {
                                                        altBoundary: true,
                                                        rootBoundary: 'document',
                                                        padding: 8,
                                                    },
                                                },
                                                {
                                                    name: 'preventOverflow',
                                                    enabled: false,
                                                    options: {
                                                        altAxis: true,
                                                        altBoundary: true,
                                                        tether: true,
                                                        rootBoundary: 'document',
                                                        padding: 8,
                                                    },
                                                },

                                            ]}
                                        >
                                            <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                                                <div><PopupMenu /></div>
                                            </ClickAwayListener>
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="card-content">
                        <span className='title-content'>
                            <a href="">
                                <span>{item.title}</span>
                            </a>
                        </span>
                        <h4 className='title-recommend'>
                            <a href="">
                                <span>{item.title}</span>
                            </a>
                        </h4>
                        {item.single && item.single.length > 0 && (
                            <h3 className='subtitle'>
                                {item.single.map((artist, index) => (
                                    <a href="" key={index}>
                                        {artist}
                                    </a>
                                ))}
                            </h3>
                        )}
                        <span className='title-love'>{item.title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

SongItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    artist: PropTypes.array
};

SongItem.defaultProps = {
    image: '',
    title: '',
    className: 'item',
    artist: [],
}

export default SongItem;