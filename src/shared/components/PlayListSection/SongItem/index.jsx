import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PopupMenu from '~/shared/components/PopupMenu';


const SongItem = ({ item, style, className }) => {

    const handleClick = (event) => {
        event.preventDefault();
    };

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: '0', left: '0' });

    const handleMoreClick = (event) => {
        const iconMoreRect = event.currentTarget.getBoundingClientRect();
        const popupTop = iconMoreRect.bottom + window.scrollY;
        const popupLeft = iconMoreRect.left + window.scrollX;
        setPopupPosition({ top: `${popupTop}px`, left: `${popupLeft}px` });
        setPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
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
                                        <button className='btn like'>
                                            <i class="icon fa-regular fa-heart"></i>
                                        </button>
                                        <button className='play-icon'>
                                            <i class="i-play fa-solid fa-play"></i>
                                        </button>
                                        {/* <button className='btn dot icon-more'>
                                            <i className="icon fa-solid fa-ellipsis"></i>
                                        </button> */}
                                        <button className='btn dot icon-more' onClick={handleMoreClick}>
                                            <i className="icon fa-solid fa-ellipsis"></i>
                                        </button>
                                        <PopupMenu isOpen={isPopupOpen} position={popupPosition} />
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