import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Button, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import PlayerListSong from '~/shared/components/PlayerListSong';
import PlayerControl from '~/shared/components/PlayerControl';

import { SideBar } from '~/layouts/MainLayout/components';

const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});





function ChildLayout(props) {
    const theme = useTheme();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [desktopOpen, setDesktopOpen] = React.useState(true);



    const handleToggle = () => {
        setDesktopOpen(!desktopOpen);
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        // <div>
        //     <Toolbar />
        //     <Divider />
        //     <List>
        //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        //             <ListItem key={text} disablePadding>
        //                 <ListItemButton>
        //                     <ListItemIcon>
        //                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        //                     </ListItemIcon>
        //                     <ListItemText primary={text} />
        //                 </ListItemButton>
        //             </ListItem>
        //         ))}
        //     </List>
        //     <Divider />
        //     <List>
        //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
        //             <ListItem key={text} disablePadding>
        //                 <ListItemButton>
        //                     <ListItemIcon>
        //                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        //                     </ListItemIcon>
        //                     <ListItemText primary={text} />
        //                 </ListItemButton>
        //             </ListItem>
        //         ))}
        //     </List>
        // </div>
        <SideBar />
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>


                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer variant="permanent" open={desktopOpen}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        whiteSpace: 'nowrap',
                        boxSizing: 'border-box',
                        ...(desktopOpen && {
                            ...openedMixin(theme),
                            '& .MuiDrawer-paper': openedMixin(theme),
                        }),
                        ...(!desktopOpen && {
                            ...closedMixin(theme),
                            '& .MuiDrawer-paper': closedMixin(theme),
                        }),
                        display: { xs: 'none', sm: 'block' }
                    }}
                >
                </Drawer>
                {/* <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer> */}
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
            </Box>
            <PlayerControl />
            <PlayerListSong />
        </Box>
    );
}

ChildLayout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default ChildLayout;
