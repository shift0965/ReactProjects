import { StyledArrayBar } from "./styles/ArrayBar.styled";
import { useState, useEffect} from "react";


export default function ArrayBar({number}) {
    const [len, setLen] = useState;
    

    return (   
        <StyledArrayBar number = {number} style={{height: `${number}px`}}>
        </StyledArrayBar> 
    )
}