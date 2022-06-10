import styled from 'styled-components'

export const Button = styled.button`
    height: 45px;

    border-radius: 30px;
    border: none;
    box-shadow: 0px 0px 15px rgba(0,0,0,15%);

    padding-left: 40px;
    padding-right: 40px;

    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    
    background-color: ${(prop) => prop.bg || "#fff"};
    color: ${(prop) => prop.color || "#333"};
 

    &:hover{
        opacity: .9;
        transform: scale(.98);
    }

`
