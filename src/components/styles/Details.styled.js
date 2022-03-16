import styled from "styled-components";

export const StyledDetails = styled.div`
    grid-area: options;
    background-color:#f8f9fa;    
    height:max(100vh, 100%);
    box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 0px 0px hsl(0deg 0% 0% / 0.075),
    0 10px 10px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075);
    padding-top:5em;
    display:flex;
    flex-direction:column;
    align-items:center;

    h2{
        font-size:1.25rem;
    }
    text-align:center;
`
export const Flex = styled.div`
    cursor:pointer;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin: 0.25em 0em;
    @media(min-width: 768px){
        flex-direction:row;
    }

    &:hover{
        background-color:#d3d3d3;
    }
`
export const Highlight = styled.div`
    color:#32CD32;
    font-weight:bold;
`

export const Seperation = styled.nav`
    border-bottom : 2px;
    border-color: black;
    border-bottom-style:solid;
    width:100%;
    margin-bottom:1em;
`