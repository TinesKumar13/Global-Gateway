import React, { useState, useEffect } from "react";
import {CardState} from '../CardState'
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
const Detail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [works, setWorks] = useState(CardState);
    const [work, setWork] = useState(null);

    useEffect(() => {
        const currentWork = works.filter((stateWork) => stateWork.link === url);
        setWork(currentWork[0]);
      }, [works, url]);
      return (
        <>
          {work && (
            <Details
              exit="exit"
              variants={pageAnimation}
              initial="hidden"
              animate="show"
            >
              <HeadLine>
                <h2>{work.title}</h2>
                <img src={work.mainImg} alt="movie" />
              </HeadLine>
              <Awards>
              <AwardStyle>
      <h3>{work.description}</h3>
      <div className="line"></div>
      <p>{work.message}</p>
    </AwardStyle>
    </Awards>
              <ImageDisplay>
                <img src={work.secondaryImg} alt="movie" />
              </ImageDisplay>
            </Details>
          )}
         <ScrollTop/>
        </>
      );
}


const Details = styled(motion.div)`
  color: black;

`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 18vh;
  position: relative;
  h2 {
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translate(-50%, -6%);
    font-size: 5rem
   
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 805px){


    h2{
        font-size: 3rem
  
}

  @media (max-width: 375px){


    h2{
        font-size: 3rem
  
}
}
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
    color: black
  }
  .line {
    width: 100%;
    background: #03A5EC;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
    color: gray;
    font-size: 2rem
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award Component


export default Detail
