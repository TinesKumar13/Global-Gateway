import React from 'react'
import styled from 'styled-components'
import { AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim,} from "../animation";
import { useScroll } from './useScroll';
const SixthSection = ({title, link ,description, arrow}) => {

    const [element, controls] = useScroll()
    return (
        <CardContainer>
            <Hide>
             <motion.h2 variants={photoAnim} initial="hidden" animate={controls} ref={element} >{title}</motion.h2>
             </Hide>
             <Hide>
            <motion.p variants={photoAnim} initial="hidden" animate={controls} ref={element} >{description}</motion.p>

             </Hide>
             <Hide>
            <a href="/">{link}</a>
            </Hide>

            <Hide>
            <AiOutlineRight fontSize="2.8rem" color="#03A5EC"/>

            </Hide>
            </CardContainer>
    )

}


const CardContainer = styled.div`
min-height: 40vh;
border-radius: 20px;
border-style: solid;
border-color: #BABABA;
border-width: 0.05rem;
margin: 2rem 5rem;
flex: 1 1 40rem;
display: flex;
flex-direction: column;
align-items : center;
justify-content: space-around;

h2{
    font-size: 3rem;
    font-family: 'Montserrat' sans-serif;
    font-weight: lighter;
}

p{
    font-size: 1.8rem;
    font-family: 'Montserrat' sans-serif;
    font-weight: regular;
    padding: 0rem 2rem;
}

a{
    font-size: 1.8rem;
    font-family: 'Montserrat' sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: #03A5EC;
}

img{
    color: black;
}
`

const Hide = styled.div`
overflow: hidden;
`
export default SixthSection
