import LogoApp from "./LogoApp";
import MenuItem from "./MenuItem";
import AddPlayList from "./AddPlayLIst";

import './index.css'

const SideBar = () => {

    return (
        <aside className="sidebar">
            <div className="sidebar-wrapper" style={{
                display: 'flex', flexDirection: 'column', height: '100%',
            }}>
                <LogoApp />
                <MenuItem />
                <AddPlayList />
            </div>
        </aside >
    )
};

export default SideBar;