import './index.css';

const PopupMenu = () => {

    return (<div className="menu">
        <ul className="menu-list">
            <li>
                <button className="zm-btn button">
                    <i class="fa-solid fa-play"></i>
                    <span>Thêm vào danh sách phát</span>
                </button>
            </li>
            <li>
                <button className="zm-btn button">
                    <i class="fa-regular fa-circle-down"></i>
                    <span>Tải xuống</span>
                </button>
            </li>
            <li>
                <button className="zm-btn button">
                    <i class="fa-regular fa-copy"></i>
                    <span>Sao chép link</span>
                </button>
            </li>
            <li>
                <div className="menu-list--submenu">
                    <button className="zm-btn button">
                        <i class="fa-solid fa-share"></i>
                        <span>Chia sẻ</span>
                        <i class="icon-right fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </li>
        </ul>
    </div>);
};



export default PopupMenu;


