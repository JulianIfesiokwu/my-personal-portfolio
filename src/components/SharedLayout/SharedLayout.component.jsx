import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from '../header/Header.component';
import Footer from '../footer/Footer.component';
import { themeContext } from "../../contexts/themeContext";

function SharedLayout() {
    const { theme } = useContext(themeContext);

    return  (
        <div className={theme ? 'light' : 'dark'}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )        
};

export default SharedLayout;