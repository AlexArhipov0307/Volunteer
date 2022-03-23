import React, {createContext, useEffect} from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import useTheme from "../hooks/usePersistedTheme";
import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { AppStyled } from "./AppStyled";
import axios from "axios";



export const ThemeContext = createContext();

const App = () => {

    const [theme, setTheme] = useTheme();
    useEffect(()=> axios.post(`${process.env.REACT_APP_BASE_URL}/test.json`, {data:"test"}))


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <AppStyled>
                    <Header />
                    <Main />
                </AppStyled>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;
