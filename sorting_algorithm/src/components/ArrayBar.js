import { StyledArrayBar } from "./styles/ArrayBar.styled";


export default function ArrayBar({number}) {

    return (   
        <StyledArrayBar number = {number} style={{height: `${number}px`}}>
        </StyledArrayBar> 
    )
}