import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box
}

body {
    /* background: #f5f5f5; */
    background: ${props => props.theme.colors.background};

    font-size: 14px;
    /* color: #333; */
    color: #${props => props.theme.colors.text};

    font-family: sans-serif;
}

`