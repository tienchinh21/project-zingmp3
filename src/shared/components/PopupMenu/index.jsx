import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const PopupMenu = ({ isOpen, onClose, position }) => {

    const STYLE_POPUP = {
        position: 'absolute',
        zIndex: 1000
    }


    if (!isOpen) return null;

    const portalContainer = document.getElementById('portal-container');

    const portalContent = (
        <div className="popup" style={{ ...position, ...STYLE_POPUP }}>
            <div className="menu">
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
            </div>
        </div>
    );


    return ReactDOM.createPortal(portalContent, portalContainer);
};

// return (
//     <div className="popup">
//         <div className="menu">
//             <ul className="menu-list">
//                 <li>
//                     <button className="zm-btn button">
//                         <i className="icon ic-add-play-now"></i>0
//                         <span>Thêm vào danh sách phát</span>
//                     </button>
//                 </li>
//                 <li>
//                     <button className="zm-btn button">
//                         <i className="icon ic-download"></i>
//                         <span>Tải xuống</span>
//                     </button>
//                 </li>
//                 <li>
//                     <button className="zm-btn button">
//                         <i className="icon ic-link"></i>
//                         <span>Sao chép link</span>
//                     </button>
//                 </li>
//                 <li>
//                     <div className="menu-list--submenu">
//                         <button className="zm-btn button">
//                             <i className="icon ic-share"></i>
//                             <span>Chia sẻ</span>
//                             <i className="icon ic-go-right"></i>
//                         </button>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     </div>
// );

export default PopupMenu;


// import React from 'react';
// import ReactDOM from 'react-dom';

// const PlayListMenu = ({ position, children }) => {
//     const popupRoot = document.getElementById('popup-root');
//     const el = document.createElement('div');

//     React.useEffect(() => {
//         popupRoot.appendChild(el);
//         return () => popupRoot.removeChild(el);
//     }, [el, popupRoot]);

//     const style = {
//         position: 'absolute',
//         top: position.top,
//         left: position.left,
//         zIndex: 1000,
//     };

//     return ReactDOM.createPortal(
//         <div style={style} className="popup">
//             {children}
//         </div>,
//         el
//     );
// };

// export default PlayListMenu;
