import React from 'react';

const MediaItem = ({ imageUrl, title, artists, releaseTime, isTop, percentage, top }) => {
    return (
        <div className="media">
            <div className="media-left">
                {isTop ? (
                    <>
                        <div className='song-prefix'>
                            <span className={`number is-top-${top}`}>{top}</span>
                        </div>
                        <div className="song-thumb">
                            <img src={imageUrl} alt="" />
                            <div className="opacity"></div>
                            <div className="actions-container">
                                <button className="play-icon">
                                    <i className="i-play fa-solid fa-play"></i>
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="song-thumb">
                        <img src={imageUrl} alt="" />
                        <div className="opacity"></div>
                        <div className="actions-container">
                            <button className="play-icon">
                                <i className="i-play fa-solid fa-play"></i>
                            </button>
                        </div>
                    </div>
                )}
                <div className="card-info">
                    <div className='title-wrapper'>{title}</div>
                    <div className='subtitle'>
                        {artists.map((artist, index) => (
                            <React.Fragment key={index}>
                                <a href="">{artist}</a>
                                {index < artists.length - 1 && ', '}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="time-release">{releaseTime}</div>
                </div>
            </div>
            <div className="media-right">
                {isTop ? (
                    <div className="hover-item">{percentage}%</div>
                ) : (
                    <div className="hover-item-music">
                        <div className="level">
                            <div className="level-item">
                                <button className="btn-item more">
                                    <i className="icon fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaItem;
