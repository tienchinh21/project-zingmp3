import { IconPlay } from '~/shared/Svgs';
import MediaItem from '~/shared/components/MediaItem';

import './index.css';
import '../../../../assets/style/common.css';
const datChartHome = [
    {
        top: "1",
        imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/f/0/1/bf0182328238f2a252496a63e51f1f74.jpg",
        title: "Cắt Đôi Nỗi Sầu",
        artists: ["Tăng Duy Tân", "Drum7"],
        isTop: true,
        percentage: "53",
    },
    {
        top: "2",
        imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/f/a/7/2fa7217d7ba558e5f9ab43b267e7de5e.jpg",
        title: "Từng Quen",
        artists: ["Wren Evans", "Itsnk"],
        isTop: true,
        percentage: "22"
    },
    {
        top: "3",
        imageUrl: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/f/a/7/2fa7217d7ba558e5f9ab43b267e7de5e.jpg",
        title: "Từng Quen",
        artists: ["Wren Evans", "Itsnk"],
        isTop: true,
        percentage: "22"
    }
]

const ChartHome = () => {
    return (
        <div className="chart-home channel-section">
            <div class="bg-blur"></div>
            <div className="bg-alpha"></div>
            <div className="header">
                <a href="">#zingchart</a>
                <button className='btn-chart'><IconPlay /></button>
            </div>
            <div className="columns">
                <div className="column w41">
                    <div className="list">
                        {datChartHome.map((item, index) => (
                            <div className="chart-song" key={index}>
                                <MediaItem
                                    top={item.top}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    artists={item.artists}
                                    isTop={item.isTop}
                                    percentage={item.percentage}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="btn-center">
                        <a className='show-more' href="">Xem thêm</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChartHome;