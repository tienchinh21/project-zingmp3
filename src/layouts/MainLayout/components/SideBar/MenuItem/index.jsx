import { Library, Radio, Discover, ZingChart, Recent, Charts, Topic, Top, Album, Favourite, Upload, Playlist, LiveTag } from '../../../../../shared/Svgs/index';
import SvgIcon from '~/shared/components/SvgsIcon';

const MenuItem = () => {

    return (
        <>
            <div className="main-menu">
                <ul className="list-item">
                    <li className="item isActive">
                        <a href="">
                            {/* <SvgIcon icon="Discover" width={24} height={24} /> */}
                            <Discover />
                            <span>Khám Phá</span>
                        </a>
                    </li>
                    <li className="item">
                        <a href="">
                            <ZingChart />
                            <span>#zingchart</span>
                        </a>
                    </li>
                    <li className="item">
                        <a href="">
                            <Radio />
                            <span>Radio</span>
                            <div className='live-tag'><LiveTag /></div>
                        </a>
                    </li>
                    <li className="item">
                        <a href="">
                            <Library />
                            <span>Thư viện</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-divide"></div>
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                <div className="sidebar-scrollbar">
                    <div className="main-menu">
                        <ul className='list-item'>
                            <li className="item">
                                <a href="">
                                    <Charts />
                                    <span>Charts Nhạc Mới</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="">
                                    <Topic />
                                    <span>Chủ Đề & Thể Loại</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="">
                                    <Top />
                                    <span>Top 100</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="vip-banner">
                        <div class="text">Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</div>
                        <a href="">Nâng cấp tài khoản</a>
                    </div>
                    <div className="main-menu mgt16">
                        <ul className='list-item'>
                            <li className="item">
                                <a href="">
                                    <Recent />
                                    <span>Nghe gần đây</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="">
                                    <Favourite />
                                    <span>Bài hát yêu thích</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="">
                                    <Playlist />
                                    <span>Playlist</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="">
                                    <Album />
                                    <span>Album</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="">
                                    <Upload />
                                    <span>Đã tải lên</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MenuItem;