import {useState} from "react";
import HomePageStyled from "./HomePageStyled";
import Step1 from "../Components/forms/Step1";
import Step2 from "../Components/forms/Step2";
import Step3 from "../Components/forms/Step3";
import Step4 from "../Components/forms/Step4";

const SearchPage = () => {
    const [stepNumber, setStepNumber] = useState(1);

    const setNumber = (pageNumber) => setStepNumber(pageNumber)
    return (
        <HomePageStyled>
            {stepNumber === 1 && <Step1 setNumber={setNumber}/>}
            {stepNumber === 2 && <Step2 setNumber={setNumber}/>}
            {stepNumber === 3 && <Step3 setNumber={setNumber}/>}
            {stepNumber === 4 && <Step4 setNumber={setNumber}/>}
        </HomePageStyled>
    )
}

export default SearchPage