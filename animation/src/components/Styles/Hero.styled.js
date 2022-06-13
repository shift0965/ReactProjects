import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.div` 
    display: flex;
    justify-content: center;
    background-color: #131313;
`

export const Container = styled.div`
    height: 100vh;
    display: grid;
    height: 100vh;
    padding: 30px;

    grid-template-columns: 1fr 1fr;
    align-items: center;
`

export const ColumnLeft = styled.div`
    color: white;
    display: flex;
    flex-direction: column;



    h1{
        font-size: 35px;
    }

    p{
        font-size: 50px;
        margin-top: 20px;
    }
`

export const Button = styled.button`
    height: 60px;
    width: 200px;
    border-radius: 5px;
    background-color: transparent;
    border: 2px white solid;
    color: white;

    opacity: 85%;

`


export const ColumnRight = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    width: 100%;
    padding: 50px;
`

export const Img = styled.img`

    position: absolute;

    &:nth-child(1){
        width: 150px;
        top: 10px;
        right: 100px;
    }

    &:nth-child(2){
        width: 80px;
        bottom: 230px;
        left: 250px;
    }
    &:nth-child(3){
        width: 200px;
        top: 150px;
        left: 120px;
    }
`
