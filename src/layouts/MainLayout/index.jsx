import { Header, Nav, ListMusic } from "./components";


const MainLayout = ({children}) => {
    return (
        <>
            <Nav/>
            <Header/>
            {children}
            <ListMusic/>
        </>
    );
};


export default MainLayout;
