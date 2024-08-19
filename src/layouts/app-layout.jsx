import { Outlet } from "react-router-dom";
import reactLogo from '../assets//react.svg';

const AppLayout = () => {
    return (
        <>
            <div>
                <a href="/" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1>React Interview Questions</h1>
            </div>
            
            {/* Outlet renders the child components */}
            <Outlet />
        </>
    );
}

export default AppLayout;