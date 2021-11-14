import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components'
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim,} from "../animation";
import { useScroll } from './useScroll';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvodloln");
  const [element,controls] = useScroll()
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (

    <FormMain id="contact-form">

      <FormHolder variants={photoAnim} initial="hidden" animate={controls} ref={element} >
      <h1>Get <span>Quote</span></h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="full-name"
        type="text" 
        name="name"
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="company">
        Company Name
      </label>
      <input
        id="company"
        type="text" 
        name="company"
        required
      />
      <ValidationError 
        prefix="company" 
        field="company"
        errors={state.errors}
      />

  <label htmlFor="contact">
        Contact No
      </label>
      <input
        id="contact"
        type="telephone" 
        name="contact"
        required
      />
      <ValidationError 
        prefix="contact" 
        field="contact"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </FormHolder>
    </FormMain>
  );
}


const FormMain = styled.div`
min-height: 60vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
`

const FormHolder = styled(motion.div)`
overflow: hidden;
width: 50%;
margin: auto;
min-height: 58vh;
border-radius: 20px;
border-style: solid;
border-color: #BABABA;
border-width: 0.05rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
form{
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 100%;
label{
    font-size: 2rem;
    font-weight: lighter;
}

input{
  margin: 3rem 0rem;
  background: #C4C4C4;
  color: white;
  border: none;
  padding: 1rem;
  width: 50%;
  border-radius: 5px;
  font-size: 1.8rem;

  &:focus{
    border: none;
    outline: none;
    font-size: 1.8rem;
  }



}

button{
  padding: 2rem 10rem;
    border-radius: 2rem;
    border: none;
    background: #03A5EC;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    cursor: pointer;
    margin: 2rem 0rem;

    &:hover{
        background: #03A5EC;
        padding: 2rem 10rem;
        color: white;
        font-size: 1.8rem;
     
        transition: background 2s ease;
    }
}
}

h1{
    font-size: 5rem;
    font-weight: lighter;
    padding: 3rem 0rem;

}

span{
    color: #03A5EC;
    font-weight: bold;
}

@media (max-width:1313px){
 
   width: 90%;

   form {
     input { 
       width: 80%
     }
   }
  }
`

export default ContactForm