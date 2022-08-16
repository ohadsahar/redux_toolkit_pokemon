import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
html,body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Rubik', sans-serif; 
    scroll-behavior: smooth;
}
p {
    margin:0px;
    padding:0px;
    color:black;
    font-weight:300;
    line-height:1.2;
}
`;

export default GlobalStyle;
