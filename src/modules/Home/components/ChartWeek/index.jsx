import './index.css'

const ChartWeek = () => {

    return (
        <div className="chart-week">
            <div className="columns-chart">
                <div className="column">
                    <div className="banner">
                        <a href="">
                            <img className='w100 d-block' src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="column">
                    <div className="banner">
                        <a href="">
                            <img className='w100 d-block' src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="column">
                    <div className="banner">
                        <a href="">
                            <img className='w100 d-block' src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChartWeek;