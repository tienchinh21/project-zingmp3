import React from 'react';
import './index.css';

const FooterMobile = () => {
    return (
        <div className='footer-mb'>
            <div className="container-mb">
                <div className="sub-container">
                    <div className='info-wrapper'>
                        <div className="z-center">
                            <div className="info-logo">
                                <span className='logo-zmp3'></span>
                                <span className='info'>Một sản phẩm của Zalo</span>
                            </div>
                            <ul className='nav-footer'>
                                <li>
                                    <a class="open-introduce">Giới thiệu</a>
                                </li>
                                <li>
                                    <div class="z-link z-link-special">•</div>
                                </li>
                                <li>
                                    <a class="open-introduce" href="">Liên hệ</a>
                                </li>
                                <li>
                                    <div class="z-link z-link-special">•</div>
                                </li>
                                <li>
                                    <a class="open-introduce" href="">Quảng cáo</a>
                                </li>
                                <br />
                                <li>
                                    <a class="open-introduce" href="">Góp ý</a>
                                </li>
                                <li>
                                    <div class="z-link z-link-special">•</div>
                                </li>
                                <li>
                                    <a class="open-introduce" href="">Thỏa thuận sử dụng</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a className='open-app' href="">
                        <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-mobile-v5.2/images/logo-mp-3.png" alt="" />
                        <span>Trải nghiệm Zing MP3 tốt nhất trên app</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile;