import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    body{
        background-color: #e9e9e9;
        font-family: 'Poppins', sans-serif;
        text-align:center;
    }
    
    img{
        max-width:100%;
    }
    
    button{
        padding: 0.5em 1.5em;
        border:none;
        background-color:#32CD32;
        font-family: 'Poppins', sans-serif;
        color: #f8f9fa;
        transition: background 1s;
        border-radius:7px;
        cursor:pointer;
    }

    button:hover{
        background-color:rgb(100, 250, 100);
    }
`

export default GlobalStyles