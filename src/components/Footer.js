import React from 'react'
import styled from 'styled-components'
import { AiFillInstagram,AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim, footerAnim, lineAnim,} from "../animation";
import { useScroll } from './useScroll';
const Footer = () => {

    const [element,controls] = useScroll()
    return (
 <FooterMain id="contact-us">
    
    <Hide>
     <motion.h1 variants={fade} initial="hidden" animate={controls} ref={element} >Contact <span>Us</span></motion.h1>

    </Hide>

     <FooterSub variants={footerAnim} initial="hidden" animate={controls} ref={element} >
         <FooterFirst>
             <Hide>
             <motion.h2 variants={titleAnim}>GLOBAL GATEWAY MOVERS & FORWARDERS SDN. BHD.</motion.h2>

             </Hide>

                <Hide>
                <motion.div variants={photoAnim} className="icon">
                <AiFillFacebook fontSize="3.8rem"/>
                </motion.div>
                
              <motion.div variants={photoAnim} className="icon2">
              <AiFillInstagram fontSize="3.8rem"/>

              </motion.div>

                </Hide>
          
         </FooterFirst>

         <FooterSecond variants={fade}>
             <Hide>
             <motion.p  variants={titleAnim}>No. 3, Jalan Nilam 1/3,<br/> Subang Hi-Tech Industrial Park,<br/> Batu Tiga,40460 Shah Alam,Selangor
            </motion.p>
             </Hide>
                <Hide>
                <motion.p  variants={titleAnim}>shankar@globalgatewaymovers.com.my
            </motion.p>
                </Hide>
            <Hide>
            <motion.p  variants={titleAnim}>+603-5631 5724
</motion.p>
</Hide>
         </FooterSecond>
     </FooterSub>
     
 </FooterMain>
    )
}


const FooterMain = styled.div`
width: 100%;
min-height: 55vh;
background:#F5F4F2;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
h1{
    font-size: 5rem;
    font-weight: lighter;
    padding: 6rem 0rem;
  
}

span{
    color: #03A5EC;
    font-weight: bold;
}

`

const Hide = styled(motion.div)`
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
`

const FooterSub = styled(motion.div)`
width: 90%;
min-height: 45vh;
margin:auto;
background: #FFFDFD;


border-top-right-radius: 20px;
border-top-left-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;


`
const FooterFirst = styled.div`
 margin-top: 9rem ;
h2{
    align-self: center;
    font-size: 3rem;
    padding: 2rem 0rem;
}

@media (max-width : 768px){
    margin-top: 2rem; 
    h2{

    font-size: 2.5rem;
   
}

@media (max-width : 414px){
     
    h2{

    font-size: 2.2rem;
   
}

}
}
`
const FooterSecond = styled(motion.div)`
border-top: 1px solid #c4c4c4;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
p{
    align-self: flex-start;
    font-size: 1.8rem;
    margin-top: 3rem;
    flex: 1 1 50rem;
}
`

export default Footer
