import Styled from 'styled-components'

export const  StyledCard = Styled.div`
    display: grid;

    grid-template-columns: ${({Even}) => (Even)?'45% 55%':'55% 45%'};
    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
    border-radius: 15px;

    margin: 50px auto;
    max-width: 1000px;
    min-height: 200px;
    align-items: center;
    padding-left: 50px;
    padding-right: 20px;
    
    

    &>div{
        flex: 1;
        display: grid;
        grid-template-rows: 1fr;
    }

    &>div:nth-child(1){
        order: ${({Even}) => (Even)? '1':'0'};

        h2{
            color: ${({Even}) => (Even)? 'pink':'skyblue'};
        }
    }

    h2{
        color: skyblue;
    }
    p{
        margin-top: 0px;
        font-size: 20px;
        line-height: 30px;
        opacity: 0.9;
    }

    img{
        width: 80%;
        max-height: 90%;
        margin: auto auto;

    }
    
    &:hover{
        transform: scale(0.99);
    }

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        display:flex;
        flex-direction: column;

        div{
            margin: 15px auto;
        }
    }

`