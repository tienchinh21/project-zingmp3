import ListNavTop from "./ListNavTop";
import Paper from '@mui/material/Paper';

import './index.css'


const NavSideBar = () => {
    return (
      <div className="nav" >
        <div className="logo">
            <img className="" src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg" alt="" />
        </div>
         <ListNavTop/>
      </div>
    );
};

export default NavSideBar;