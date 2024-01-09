import { Header, SideBar, HeaderMb, FooterMb } from './components';
import PlayerControl from '~/shared/components/PlayerControl';
import PlayerListSong from '~/shared/components/PlayerListSong';

const MainLayout = ({ children }) => {
    return (
        <>
            <SideBar />
            <HeaderMb />
            <Header />
            {children}
            {/* <PlayerControl /> */}
            {/* <PlayerListSong /> */}
            <FooterMb />
        </>
    );
};


export default MainLayout;
