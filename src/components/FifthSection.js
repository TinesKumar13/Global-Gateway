import React from 'react'
import styled from 'styled-components'
import business from '../img/business.svg'
import focus from '../img/focus.svg'
import containership from '../img/containership.svg'
import fist from '../img/fist.svg'
import networking from '../img/networking.svg'
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim,} from "../animation";
import { useScroll } from './useScroll'


const FifthSection = () => {

    const [element,controls] = useScroll()
    return (
            <FifthMain>
                <FifthContainer>
                    <Hide>
                    <motion.h1 variants={fade} initial="hidden" animate={controls} ref={element}>Why <span>Us</span></motion.h1>

                    </Hide>
                    <FifthDescription variants={photoAnim} initial="hidden" animate={controls} ref={element}>
                        <FifthElement>
                            <img src={focus} alt="focus" />
                            <p>Industry expertise and knowledge</p>
                        </FifthElement>

                        <FifthElement>
                            <img src={fist} alt="fist" />
                            <p>We can leverage our buying power to reduce transport costs
                            </p>
                        </FifthElement>

                        <FifthElement>
                            <img src={business} alt="business" />
                            <p>You can focus on your business, no complex transportation, or customs processes.
                            </p>
                        </FifthElement>

                        <FifthElement>
                            <img src={networking} alt="networking" />
                            <p>Worldwide network of agents.
                            </p>
                        </FifthElement>

                        <FifthElement>
                            <img src={containership} alt="container" />
                            <p> Provide confidence to export to or import from new markets
                            </p>
                        </FifthElement>
                    </FifthDescription>
                </FifthContainer>
            </FifthMain>
    )
}



const FifthMain = styled.div`
width: 100%;

`


const Hide = styled.div`
overflow: hidden;
`

const FifthElement = styled.div`
text-align: center;
flex: 1 1 30rem;


img{
    height: 144px;
    width: 138px;
}

p{
    font-size: 1.5rem;
    padding: 2rem 0rem;
}
@media (max-width: 375px){


    img{
    height: 28%;
    width: 28%;
}



}

`

const FifthContainer = styled.div`
min-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-around;
margin: auto;
margin-top: 5rem;
overflow: hidden;

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

const FifthDescription = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
flex-wrap: wrap;
overflow: hidden;
`
export default FifthSection
