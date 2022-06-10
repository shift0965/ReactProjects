import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.header};
    padding: 40px 0px;
`

export const Nav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        flex-wrap: wrap;
    }
`

export const Button = styled.button`

`

export const Logo = styled.div`
    width: 160px;
    height: 50px;
    font-weight: bold;
    font-size: 40px;
    
    background-image: linear-gradient(to right, pink , purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;    
`


export const Image = styled.img`
    right: 0px;
    width: 300px;
    height: 100%;
    padding-left: 40px;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        margin-top: 40px;
    }
`



