
import { Outlet } from 'react-router-dom';
import MainNavbar from '../../Navbar/MainNavbar';


const Main = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;