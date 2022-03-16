import React, { useEffect, useState} from 'react';
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import {HeaderStyled} from "./HeaderStyled";

import useDeviceSizes from "../../hooks/useDeviceSizes";
import Burger from "../burger/Burger";
import Sidebar from "../sideBar/SideBar";


const Header = () => {
    const { isMobileDevice } = useDeviceSizes();
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const toggleSidebar = () => {
        setSideBarOpen((prev) => !prev);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = isSideBarOpen ? "hidden" : "auto";
    }, [isSideBarOpen]);

    return (
        <HeaderStyled>
            <Logo/>
            <div className='navigationContent'>
                {!isMobileDevice &&  <Navigation toggleSidebar={toggleSidebar}/>}
                {isMobileDevice && (
                    <>
                        <Burger
                            isSideBarOpen={isSideBarOpen}
                            setSideBarOpen={setSideBarOpen}
                        />
                        <Sidebar isSideBarOpen={isSideBarOpen} toggleSidebar={toggleSidebar}>
                            <Navigation toggleSidebar={toggleSidebar}/>
                        </Sidebar>
                    </>
                )}
            </div>
        </HeaderStyled>
    );
};

export default Header;