import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./header/Header.component";

import { themeContext } from "../contexts/themeContext";

function PageLayout() {
    const { theme } = useContext(themeContext);

    return (
        <div className={theme ? 'light' : 'dark'}>
            <Header />
            <Outlet />
        </div>
    )
};

export default PageLayout;