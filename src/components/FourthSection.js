import React from 'react'
import helicopter from "../img/helicopter.jpg"
import ship from "../img/ship.jpg"
import train from "../img/train.jpg"
import carrier from "../img/carrier.jpg"
import styled from 'styled-components'
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim,} from "../animation";
import { useScroll } from './useScroll'
const FourthSection = () => {

    const [element,controls] = useScroll()
    return (
        <FourthContainer>


                <ImageOne src={helicopter} alt="helicopter" />


         
            <ImageTwo src={ship} alt="ship" />
               

               
                <ImageThree src={train} alt="train" />
                

              
                <ImageFour src={carrier} alt="carrier" />

            <Description >
                <Hide>
            <motion.h1 variants={fade} initial="hidden" animate={controls} ref={element}>Vision And <span>Strategy</span></motion.h1>

                </Hide>
<Hide>
<motion.p variants={fade} initial="hidden" animate={controls} ref={element}>
We want to be a leading freight forwarder in Malaysia specialized on Air freight, Sea freight, Road freight & Rail freight. In addition,  We want to ensure that “Customer service & experience Excellence” are achieved by going though this era movement of globalization and digitalization.

</motion.p>
</Hide>


            </Description >


        </FourthContainer>
    )
}


const FourthContainer = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
min-height: 80vh;
padding-top: 4rem;





img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 1326px){

    grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
    

    img{
    grid-row: auto;
    grid-column: auto;
    }


}
`
const ImageOne = styled.img`
grid-column: 1/2;

`
const ImageTwo = styled.img`

grid-row: 2/3;
grid-column: 1/3;




`
const ImageThree = styled.img`
grid-column: 2/3;


`
const ImageFour = styled.img`
grid-row: 1/2;

grid-column: 3/4;


`

const Hide = styled.div`
overflow: hidden;
`

const Description = styled.div`

align-self: center;
grid-row: 2/3;
text-align: center;

h1{
    
    color: black;
    font-size: 6.2rem;
    align-self:center;
    padding: 1rem 0rem;
    
}

span {
    color: #03A5EC
}
p{

    
    color: black;
    font-weight: regular;
    text-align: center;
    font-size: 2.0rem;
    padding: 0rem 1rem;
    justify-self: center;

}



@media (max-width:1033px) and (min-width:843px) {
    
    grid-row: 3/4;
    grid-column: 1/3 ;
    align-self: center;
    margin-top: 2rem;

    h1{
   
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    
    span{
        color: #03A5EC;
        font-weight: bold;
    }


}
}

@media (max-width:842px) {
    
    grid-row: auto;
    grid-column: auto ;
    align-self: center;
    margin-top: 2rem;

    h1{
   
   font-family: 'Montserrat', sans-serif;
   font-weight: lighter;
   
   span{
       color: #03A5EC;
       font-weight: bold;
   }


}
}
`

export default FourthSection
