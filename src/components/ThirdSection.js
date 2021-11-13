import React from 'react'
import styled from 'styled-components'
import airplane from '../img/airplane.jpg'
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim,} from "../animation";
import { useScroll } from './useScroll';
const ThirdSection = () => {

    const [element, controls] = useScroll()
    return (
    <ThirdContainer>   
           <ThirdHolder>

           <DescriptionHolder>
               <Hide>
               <motion.h1 variants ={titleAnim} initial="hidden" animate={controls} ref={element}>About<span> Us</span></motion.h1>
               </Hide>
         
                <motion.p variants={fade} initial="hidden" animate={controls} ref={element}>Global Gateway has been traditionally known as a Mover and Freight Forwarder Company. These business activities will continue to be its dominance and will grow. We provide our clients a hassle-free access to the best shipping deals for their business and take care with all the necessary documentation and liaise with the entire chain of transportation companies involved. We organize and arrange all aspects of the shipping process from the moment their goods leaves the manufacturing site until it safely arrives at the hands of the wholesaler or consumer.

Today’s market is extremely competitive, by using us we provide cost-effective shipping is an excellent way for businesses to cut down on unnecessary expenditures. We have experience arranging shipments and dealing with all the relevant paperwork.
</motion.p>

               </DescriptionHolder>
               <ImageHolder>
               <motion.img variants={photoAnim} initial="hidden" animate={controls} ref={element} src={airplane} alt="airplane" />

               </ImageHolder>

               </ThirdHolder> 

    </ThirdContainer>
    )
}


const ThirdContainer = styled.div`
width: 100%;
min-height: 80vh;

`

const Hide = styled.div`
overflow: hidden;

`

const ThirdHolder = styled.div`
width: 90%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap-reverse;
`

const DescriptionHolder = styled.div`
flex: 1 1 50rem;

h1{
    font-size: 5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    padding: 2rem 0rem;
    span{
        color: #03A5EC;
        font-weight: bold;
    }


}

p{
    font-size: 1.8rem;
    text-align: center;
    line-height: 2.8rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    }
`

const ImageHolder = styled.div`

flex: 1 1 50rem;
margin-top: 4rem;
margin-left: 3rem;
overflow: hidden;

img{
    height: 100%;
    width: 100%;
}

    @media (max-width: 1113px){
        margin-left: 0rem;
    }

`
export default ThirdSection
