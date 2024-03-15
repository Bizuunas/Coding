import { Outlet } from "react-router-dom";

import Nav from "../shared/Nav.jsx";

import './MainLayout.css';

const MainLayout = () => {
    return (
        <>
            <Nav />
            <div className="page-content">
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout
