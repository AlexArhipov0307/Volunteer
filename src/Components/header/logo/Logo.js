import React, {useContext} from 'react';
import {StyledLogo} from "./LogoStyled";
import {Link} from "react-router-dom";
import logo from '../../../icons/Vолонтер.png';
import darkLogo from '../../../icons/VолонтерDark.png'
import {ThemeContext} from "../../App";

const Logo = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <StyledLogo>
            <Link to='/' className='statisticsLink'>
                <img src={themeContext.theme.title === 'light' ? logo : darkLogo} alt='volunteers' className='logo'/>
            </Link>
        </StyledLogo>
    );
};

export default Logo;