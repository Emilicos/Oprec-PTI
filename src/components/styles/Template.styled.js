import styled from "styled-components";

export const StyledTemplate = styled.div`
    background: #ffffff;
    box-shadow: 6px 18px 24px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 250px;
    border-radius: 10px;
    display: inline-block;
    font-size: 0.75rem;
    
    h3{
        padding-top:1em; 
    }
    
    button{
        margin: 1em 0em 1.5em 0em;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center; 
        p{
            margin-left:0.5em;
        }
    }
    margin:2em 2em 1em 0em;

    &:hover{
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
    }
`

export const StyledBook = styled.div`
    padding: 0;
    margin: 0;
    height: 315px;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor:pointer;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
`

export const StyledButton = styled.button`
    background-color: ${(props) => props.color};
    &:hover{
        background-color: #E3242B;
    }
`

export const FlexAround = styled.div`
    display:flex;
    justify-content:space-around
`