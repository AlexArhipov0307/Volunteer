import React from "react";
import { LoaderStyled } from "./LoaderStyled";
import {Circles} from "react-loader-spinner";

const LoaderComponent = () => {
    return (
        <LoaderStyled>
            <Circles
                height="100"
                width="100"
                color='cornflowerblue'
                ariaLabel='loading'
            />
        </LoaderStyled>
    );
};

export default LoaderComponent;