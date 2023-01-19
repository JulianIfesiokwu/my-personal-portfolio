import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./header/Header.component";
import Bottom from './bottom/bottom';

import { themeContext } from "../contexts/themeContext";

function PageLayout() {
    const { theme } = useContext(themeContext);

    return (
        <div className={theme ? 'light' : 'dark'}>
            <Header />
            <Outlet />
            <Bottom />
        </div>
    )
};

export default PageLayout;