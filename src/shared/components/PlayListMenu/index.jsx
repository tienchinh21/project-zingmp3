import React from 'react';

const PlayListMenu = () => {
    return (
        <div class="menu">
            <ul class="menu-list">
                <li>
                    <button class="zm-btn button">
                        <i class="icon ic-add-play-now"></i>0
                        <span>Thêm vào danh sách phát</span>
                    </button>
                </li>
                <li>
                    <button class="zm-btn button">
                        <i class="icon ic-download"></i>
                        <span>Tải xuống</span></button>
                </li>
                <li>
                    <button class="zm-btn button">
                        <i class="icon ic-link"></i>
                        <span>Sao chép link</span>
                    </button>
                </li>
                <li>
                    <div class="menu-list--submenu">
                        <button class="zm-btn button">
                            <i class="icon ic-share"></i>
                            <span>Chia sẻ</span>
                            <i class="icon ic-go-right"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PlayListMenu;