import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`

*{
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}


html{
    font-size: 62.5%;

    @media (max-width: 411px){


      
            font-size: 48%;
     


}


@media (max-width: 280px){


      
font-size: 33%;



}

}

body{

    font-family: 'Montserrat', sans-serif;
  
}
`

export default GlobalStyle;