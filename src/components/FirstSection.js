import React from 'react'
import styled from 'styled-components'
import backdrop from '../img/backdrop.jpg'
import { motion } from "framer-motion";
import { titleAnim, fade,} from "../animation";
import { useScroll } from './useScroll';
const FirstSection = () => {

    const [element, controls] = useScroll()
    return (
            <MainSection>
                 
                    <DescriptionHolder>
                    
                    <Hide>
                    <motion.h1  variants={titleAnim} initial="hidden" animate={controls} ref={element}>GLOBAL GATEWAY MOVERS & FORWARDERS</motion.h1>
                    </Hide>
                    <motion.button variants={fade} initial="hidden" animate={controls} ref={element}>Get A Quote</motion.button>

                    </DescriptionHolder>
            </MainSection>
    )
}

const MainSection = styled(motion.div)`
 background: url(${backdrop});
  min-height: 85vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 360px){


    width: 100%;


}
`

const Hide = styled.div`
overflow: hidden;
`


const DescriptionHolder = styled(motion.div)`


h1{
    color: white;
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
    padding: 2rem 0rem;
}

button{
    padding: 2rem 10rem;
    border-radius: 2rem;
    border: none;
    background: #FAFAFA;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    cursor: pointer;

    &:hover{
        background: #03A5EC;
        padding: 2rem 10rem;
        color: white;
        font-size: 1.8rem;
     
        transition: background 2s ease;
    }
}
`


export default FirstSection
