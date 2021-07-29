import * as React from "react";
import { useState } from 'react';
import Hello from "../components/Hello";
import CardsWrapper from "../components/CardsWrapper";
import AboutMeList from "../components/AboutMeList";
import Header from "../components/Header";
import ExpCard from "../components/ExpCard";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useMediaQuery } from '../components/hooks/useMediaQuery';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  transition: all 150ms ease-in-out, color 150ms ease-in-out;
}

html {
  background-color: #fcf4f2;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

i.fas, i.fab {
  display: flex;
  align-items: center;
}

a.clean-link{
  text-decoration: none;
  color: currentColor;
}

h1 {
  font-size: 3rem;
}

h1,h3 {
  color: #333333;
}

.underline-title {
  position: relative;
}

@keyframes slideInFromLeft {
  0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    25% {
      opacity: 0;
    }
    /* Other animation is hidden for 75% of the time */
    50% {
      opacity: 0;	
    }
    75% {
      opacity: .5;	
    }
    100% {
      opacity: 1;	
      transform: translateX(0);
    }
  
}

.underline-title::before {
  color: #000;
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #000;
  animation: 1s ease-out 0s 1 slideInFromLeft;
      
    
};

.underline-title:hover {
  color: #000;       
    
};

@media only screen and (max-width: 500px) {
  main.portfolio-main {
      margin: 3rem 1rem 0 !important;
  }
  div.intro-container {    
    flex-direction: column;    
    text-align: center;
  }
  div.intro-container__typing {
    min-height: 78.875px;
    margin: auto;
  }
  h1.intro-container__title {
    margin-block-start: 0;
  }
}

.portfolio-main {
  margin: 6rem 2rem;
}

.intro-container {
  display: flex;
  justify-content: center;
  flex-direction: row;    
  text-align: inherit;
}
.intro-container__typing {
  width: 9rem;
  min-height: auto;
  margin: inherit;
}

.intro-container__title {
  margin-block-start: 0.67em;
}
`;



const HoverLinkBlue = styled.a`
  margin-left: 4px;
  box-shadow: 0 10px 0 0 rgb(0 114 177 / 0%), inset 0 -0.125em rgb(0 114 177 / 20%);
  padding: 0 2px 2px;
  position: relative;
  transition-duration: .2s;
  transition-property: box-shadow,color;
  text-decoration: none;
  color: currentColor;
  &:hover { 
    border-radius: 2px;   
    box-shadow: 0 0 2px rgb(0 114 177 / 75%), inset 0 -1.375em 0 rgb(0 114 177 / 75%);
    color: white;
  }
`;

const HoverLinkOrange = styled.a`  
  margin-left: 4px;
  box-shadow: 0 10px 0 0 rgb(241 80 47 / 0%), inset 0 -0.125em rgb(241 80 47 / 20%);
  padding: 0 2px 2px;
  position: relative;
  transition-duration: .2s;
  transition-property: box-shadow,color; 
  &:hover { 
    border-radius: 2px;   
    box-shadow: 0 0 2px rgb(241 80 47 / 75%), inset 0 -1.375em 0 rgb(241 80 47 / 75%);
    color: white;
  }
`;





// markup
const IndexPage = () => {

  const addInfoStyles = {
    textAlign: "center",
    margin: "3rem 0"
  }

  return (
    <>
    <GlobalStyle/>
      <Helmet title="foo bar">
        <script src="https://kit.fontawesome.com/504a442b12.js" crossorigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,200&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header/>
        <main className="portfolio-main">     
          <Hello/>
          <AboutMeList/>
          <p style={addInfoStyles}>Lets collaborate. Find me on 
          <HoverLinkBlue className="clean-link"  href="https://www.linkedin.com/in/jevengineering/">LinkedIn</HoverLinkBlue> and 
          <HoverLinkOrange className="clean-link"  href="https://github.com/jayvickers">GitHub</HoverLinkOrange></p>          
          <CardsWrapper/>
        </main>
    </>
  )
}

export default IndexPage
