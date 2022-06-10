import styled from "styled-components"


export const Flex = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    margin-top: 20px;

    

    & > div{
        flex: 1;
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;

        & > div{
            text-align: center;
        }
    }
    
`