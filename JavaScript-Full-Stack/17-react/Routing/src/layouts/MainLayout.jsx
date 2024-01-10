import { Outlet } from "react-router-dom";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

import './MainLayout.css';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="page-content">
                <div className="container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
