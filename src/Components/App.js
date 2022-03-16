import React, {createContext} from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import useTheme from "../hooks/usePersistedTheme";
import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { AppStyled } from "./AppStyled";
// import {useDispatch} from "react-redux";


export const ThemeContext = createContext();

// export const {
//     Provider: ThemeContextProvider,
//     Consumer: ThemeContextConsumer,
// } = createContext();

const App = () => {

    const [theme, setTheme] = useTheme();


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
