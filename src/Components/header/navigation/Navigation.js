
import React from "react";
import {NavigationStyled} from "./NavigationStyled";
import {NavLink} from "react-router-dom";
import useDeviceSizes from "../../../hooks/useDeviceSizes";

const Navigation = ({toggleSidebar}) => {
    const { isMobileDevice } = useDeviceSizes();
    const clicked = () => {
        isMobileDevice && toggleSidebar();
    }
    return (
        <NavigationStyled isMobileDevice={isMobileDevice}>
            <ul className='navList'>
                <li onClick={clicked} className='navListElement'>
                    <NavLink to='/'className={({isActive}) => isActive
                        ? 'navListItemActive navListItem'
                        : 'navListItem'} >Главная</NavLink>
                </li>      <li onClick={clicked} className='navListElement'>
                    <NavLink to='/search'className={({isActive}) => isActive
                        ? 'navListItemActive navListItem'
                        : 'navListItem'} >Поиск</NavLink>
                </li>
                <li onClick={clicked} className='navListElement'>
                    <NavLink to='/prisoners'className={({isActive}) => isActive
                        ? 'navListItemActive navListItem'
                        : 'navListItem'} >Список пленных</NavLink>
                </li>
            </ul>
        </NavigationStyled>
    );
};

export default Navigation;