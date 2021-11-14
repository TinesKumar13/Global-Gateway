import React, { useState , useEffect} from 'react'
import { useLocation } from "react-router-dom";
import {CardState} from '../CardState'
import FifthSection from '../components/FifthSection'
import FirstSection from '../components/FirstSection'
import FourthSection from '../components/FourthSection'
import Nav from '../components/Nav'
import SecondSection from '../components/SecondSection'
import SixthSection from '../components/SixthSection'
import ThirdSection from '../components/ThirdSection'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import { pageAnimation } from '../animation';
import { motion } from "framer-motion";
const AboutUs = () => {

    const [card, setCard] = useState([])
   

    useEffect(() => {
   setCard(CardState)
    },[])

    return (
        <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
           
           <FirstSection/>
           <SecondSection/>
           <ThirdSection/>
           <FourthSection/>
           <FifthSection/>

           <SixthContainer>

               <h1>Our <span>Expertise</span></h1>
               



               <SixthDescription>
                {

                
                   card.map((c) => 
                   (
                        <SixthSection title={c.title} description = {c.description} link = {c.link} arrow = {c.arrow} key={c.title}/>
                   
                   )
                        )
                }
                </SixthDescription> 
                
                </SixthContainer>
                <ContactForm/>
               
                <Footer/>
                <ScrollTop/>
        </motion.div>
    )
}


const SixthContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
min-height: 65vh;

h1{
    font-size: 5rem;
    font-weight: lighter;
    padding: 3rem 0rem;

}

span{
    color: #03A5EC;
    font-weight: bold;
}
`

const SixthDescription = styled.div`
display: flex;
flex-wrap: wrap;
width: 80%;
margin: auto;
align-items: center;
justify-content: space-around;
`


export default AboutUs
