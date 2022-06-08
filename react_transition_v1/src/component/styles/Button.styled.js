import styled from 'styled-components'

export const Button = styled.button`
    height: 50px;
    width: 200px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 15px purple;

    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    

    background-color: ${(bg) => bg || '#fff'};
    color: ${(color) => color || 'black'};

    &:hover{
        opacity: .9;
        transform: scale(.98);
    }

`
