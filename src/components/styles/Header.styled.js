import styled from "styled-components";

export const StyledHeader = styled.header`

    font-family: 'Kaushan Script', cursive;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width:100%;
    padding:0 2em;
    height:4rem;
    box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075)
  ;
    color:#32CD32;
    position:fixed;
    z-index: 2;
    h1{
      cursor: pointer;
      padding-bottom:0.15em;
    }
`
export const StyledIcon = styled.div`
    position: ${(props) => props.position};
    font-size:0.75rem;
    padding: 0.65em 0.8em;
    color: ${(props) => props.color}
`

export const StyledInput = styled.div`
    input{
        border-width:2px;
        padding: 0 0 0 2em;
        border-radius:3px;
        height:2rem;
        display:block;
        width:100%;
    }
`
export const StyledInputButton = styled.form`
    button{
        margin:0em 0em 0em 2em;
    }
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const StyledOptions = styled.div`
    display: flex;
    p{
        margin-right:2em;
    }
    cursor:pointer;
`