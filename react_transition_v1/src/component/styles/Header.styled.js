import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0px;
`

export const Nav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    border: 2px red solid;
`

export const Button = styled.button`

`

export const Logo = styled.div`
    width: 160px;
    height: 50px;
    border: yellow 2px solid;
    font-weight: bold;
    font-size: 40px;
    
    background-image: linear-gradient(to right, pink , purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;    
`



