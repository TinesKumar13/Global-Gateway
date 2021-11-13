import React from 'react'
import styled from 'styled-components'
import container from '../img/container.jpg'
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim,} from "../animation";
import { useScroll } from './useScroll';
const SecondSection = () => {

    const [element, controls] = useScroll()
    return (
    <SecondContainer>   
           <SecondHolder>


               <ImageHolder>
               <motion.img variants={photoAnim} initial="hidden" animate={controls} ref={element} src={container} alt="container" />

               </ImageHolder>

               <DescriptionHolder>
                   <Hide>
               <motion.h1 variants={fade} initial="hidden" animate={controls} ref={element}>Our<span> Story</span></motion.h1>

                   </Hide>

                   <Hide>
                <motion.p variants={fade} initial="hidden" animate={controls} ref={element}>In 2003, Suprumaniam Suppiah founded a freight forwarding company in Shah Alam, Malaysia. Over the last 15 years, GLOBAL GATEWAY MOVERS & FORWARDERS SDN. BHD. Have been specialized on customer needs, service and safety.</motion.p>

                   </Hide>
               </DescriptionHolder>
               </SecondHolder> 
    </SecondContainer>
    )
}


const SecondContainer = styled.div`
width: 100%;
min-height: 80vh;
`
const Hide = styled.div`
overflow: hidden;
`
const SecondHolder = styled.div`
width: 90%;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

const DescriptionHolder = styled.div`
flex: 1 1 50rem;
margin-left: 3rem;
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

    @media (max-width: 1148px){
        margin-left: 0rem;
    }
`

const ImageHolder = styled.div`

flex: 1 1 50rem;
margin-top: 4rem;
overflow: hidden;

img{
    height: 100%;
    width: 100%;
}

`
export default SecondSection
