import { Outlet } from "react-router-dom";
import reactLogo from '../assets//react.svg';

const AppLayout = () => {
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>React Interview Questions</h1>
            <Outlet />
        </>
    );
}

export default AppLayout;