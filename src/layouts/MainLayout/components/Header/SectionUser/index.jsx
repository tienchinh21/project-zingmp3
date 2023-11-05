import { Download } from "~/shared/Svgs";


const SectionUser = () => {
    return (
        <div className="header-left">
            <div className="download-desktop-app">
                <a href="">
                    <Download />
                    <span>Tải bản Windows</span>
                </a>
            </div>
            <div className="setting-item">
                <button>
                    <i class="icon-setting fa-solid fa-gear"></i>
                </button>
            </div>
            <div className="user-setting">
                <div className="avt">
                    <img className="w100" src="https://s120-ava-talk-zmp3.zmdcdn.me/5/6/5/8/2/120/2d9105fc837020366dce516d381f4b3e.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionUser;