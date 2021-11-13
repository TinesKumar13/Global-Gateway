import React , {useState} from 'react';
import styled from 'styled-components'
import global from "../img/global.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {

    const [toggle, setToggle] = useState(false)
    return (
            <NavContainer>
                <NavHolder>
                    <LogoHolder>
                    <img src={global} alt="company-logo" />

                    </LogoHolder>


                    <div className="menu" onClick={() => setToggle(!toggle)}>
                    {toggle ?  <AiOutlineClose style={{fontSize: '2.8rem'}}/> : <AiOutlineMenu style={{fontSize: '2.8rem'}}/> }

                    </div>
                    <ul className ={toggle ? "active" : ""}>
                        <li>Our Story</li>
                        <li>About Us</li>
                        <li>Vision and Strategy</li>
                        <li>Why Us</li>
                        <li>Our Expertise</li>
                        <li>Contact Us</li>
                    </ul>
                </NavHolder>
            </NavContainer>
    )
}


const NavContainer = styled.div`
width: 100%;

.menu{
    display: none;
}
ul {
    display: flex;
    width: 70%;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: bold;
    list-style: none;
    cursor: pointer;

        li{
            &:hover{
        color: #03A5EC
    }
        }


        
}
`

const NavHolder = styled.div`
min-height: 15vh;
display: flex;
align-items: center;
justify-content: space-between;
margin: auto;
padding: 0rem 2rem;
width: 95%;
position: relative;
z-index: 2;


@media (max-width: 1210px){

    .menu{
        display: block;
        position: absolute;
        z-index: 3;
        right: 0;
        top: 45%;
        padding: 0rem 1rem;
    }
        .active {
            transform: translateX(-100%);
        }

        ul{
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            top: 0;
            left: 100%;
            align-items: center;
            justify-content: space-around;
            background: white;
            position: fixed;
            transition: transform 1.5s ease;
        
        }
    }

    
    
  @media (max-width: 360px){


width: 100%;


}

`

const LogoHolder = styled.div`
img{
width: 100%;
}

@media (max-width: 375px){


    img{
    width: 75%;
    height: 100%;
  
}


}

`

export default Nav
