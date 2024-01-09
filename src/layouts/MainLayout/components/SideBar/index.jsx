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

// import AddPlayList from "./AddPlayLIst";
// import LogoApp from "./LogoApp";
// import MenuItem from "./MenuItem";

// import { useTheme } from '@mui/material';
// import Drawer from '@mui/material/Drawer';
// import * as React from 'react';
// import './index.css';

// const drawerWidth = 240;


// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
//     background: "transparent"
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
//     background: "transparent"
// });

// const SideBar = () => {
//     const theme = useTheme();

//     const [desktopOpen, setDesktopOpen] = React.useState(true);

//     const handleToggle = () => {
//         setDesktopOpen(!desktopOpen);
//     }

//     return (
//         // <aside className="sidebar">

//         <Drawer variant="permanent" open={desktopOpen}
//             sx={{
//                 width: drawerWidth,
//                 flexShrink: 0,
//                 whiteSpace: 'nowrap',
//                 boxSizing: 'border-box',
//                 ...(desktopOpen && {
//                     ...openedMixin(theme),
//                     '& .MuiDrawer-paper': openedMixin(theme),
//                 }),
//                 ...(!desktopOpen && {
//                     ...closedMixin(theme),
//                     '& .MuiDrawer-paper': closedMixin(theme),
//                 }),
//                 display: { xs: 'none', sm: 'block' }
//             }}
//         >
//             <div className="sidebar-wrapper" style={{
//                 display: 'flex', flexDirection: 'column', height: '100%',
//             }}>
//                 <LogoApp />
//                 <MenuItem />
//                 <AddPlayList />
//             </div>
//         </Drawer>

//         // </aside >
//     )
// };

// export default SideBar;
