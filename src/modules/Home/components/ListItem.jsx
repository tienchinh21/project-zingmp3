import React from 'react'

const ListItem = ({ item, style, className = "item", single }) => {
    return (
        <div className={className} style={{ ...style }}>
            <div className="playlist-wrapper">
                <div className="card">
                    <div>
                        <a className='link-item' href="">
                            <div className="card-image">
                                <img src={item.img} />
                                <div className='opacity'></div>
                                <div className='actions actions-container'>
                                    <div className='playlist-actions'>
                                        <button className='btn like'>
                                            <i class="icon fa-regular fa-heart"></i>
                                        </button>
                                        <button className='play-icon'>
                                            <i class="i-play fa-solid fa-play"></i>
                                        </button>
                                        <button className='btn dot'>
                                            <i class="icon fa-solid fa-ellipsis"></i>
                                        </button>
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
                        {single && single.length > 0 && (
                            <h3 className='subtitle'>
                                {single.map((artist, index) => (
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
}

export default ListItem;