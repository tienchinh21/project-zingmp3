import {Header, SideBar} from './components';


const MainLayout = ({children}) => {
    return (
        <>
            <SideBar/>
            <Header/>
            {children}

        </>
    );
};


export default MainLayout;
