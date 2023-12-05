import { Header, SideBar } from './components';
import PlayerControl from '~/shared/components/PlayerControl';
import PlayerListSong from '~/shared/components/PlayerListSong';

const MainLayout = ({ children }) => {
    return (
        <>
            <SideBar />
            <Header />
            {children}
            <PlayerControl />
            <PlayerListSong />
        </>
    );
};


export default MainLayout;
