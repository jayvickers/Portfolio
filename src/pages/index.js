import * as React from 'react'
import Hello from '../components/Hello'
import CardsWrapper from '../components/CardsWrapper'
import AboutMeList from '../components/AboutMeList'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import logo from '../images/bgsolid-min-web.webp'

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  transition: all 150ms ease-in-out, color 150ms ease-in-out;
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
  div.about-wrapper {
    margin: 3rem 1rem 0 !important;
  }
  div.exp-card-wrapper {
    padding: 3rem 1rem 0 !important;
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

  p.exp-card-wrapper__hidden-sub {
    display: none;
  }

  h1 {
    font-size:42px;
  }
}

div.about-wrapper {
  margin: 6rem 2rem 8rem 2rem;
}

div.exp-card-wrapper {
  padding: 6rem 2rem;
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

.exp-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #E0F1F1;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #383532;
  margin: 0 0.5rem 1rem 0.5rem;
  padding: 1rem;
  flex: 0 1 35%;
  min-width: 300px;
  cursor: default;
}

@keyframes testSize {
  0% {
      font-size:12px;
    }
   
  
    100% {
      font-size: 16px;
      color: rgb(241 80 47);
    }
  
}


div.exp-card:hover {
  box-shadow: 3px 4px 3px #2D2A28;
}

div.exp-card li:nth-of-type(1) i { animation-delay: .1s; }
div.exp-card li:nth-of-type(2) i { animation-delay: .2s; }
div.exp-card li:nth-of-type(3) i { animation-delay: .3s; }
div.exp-card li:nth-of-type(4) i { animation-delay: .4s; }

div.exp-card:hover i {  
  animation: .1s ease-in-out 0s 1 testSize;
  animation-fill-mode: both;  
}

i {
  transition: all 150ms ease-in-out, color 150ms ease-in-out;
}


`

const HoverLinkBlue = styled.a`
  margin-left: 4px;
  box-shadow: 0 10px 0 0 rgb(0 114 177 / 0%), inset 0 -0.125em rgb(0 114 177 / 100%);
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
`

const HoverLinkOrange = styled.a`  
  margin-left: 4px;
  box-shadow: 0 10px 0 0 rgb(241 80 47 / 0%), inset 0 -0.125em rgb(241 80 47 / 100%);
  padding: 0 2px 2px;
  position: relative;
  transition-duration: .2s;
  transition-property: box-shadow,color; 
  &:hover { 
    border-radius: 2px;   
    box-shadow: 0 0 2px rgb(241 80 47 / 75%), inset 0 -1.375em 0 rgb(241 80 47 / 75%);
    color: white;
  }
`

// markup
const IndexPage = () => {
  const addInfoStyles = {
    textAlign: 'center',
    margin: '3rem 0'
  }

  return (
    <>
    <GlobalStyle/>
      <Helmet title="Jay Vickers, Software Engineer">
        <meta name="description" content="Jay Vickers resume" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/504a442b12.js" crossOrigin="anonymous"/>
      </Helmet>
      <Header/>
        <main className="portfolio-main">
          <div className="about-wrapper">
            <Hello/>
            <AboutMeList/>
            <p style={addInfoStyles}>7 years of full-stack experience, 5 years serving React components to millions of end-users. Lets collaborate, Find me on
              <HoverLinkBlue className="clean-link" href="https://www.linkedin.com/in/jevengineering/">LinkedIn</HoverLinkBlue> and
              <HoverLinkOrange className="clean-link" href="https://github.com/jayvickers">GitHub</HoverLinkOrange>
            </p>
          </div>
          <div className="svg_divider">
              <svg style={{ fill: '#6363b7', marginBottom: '-4px' }} x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
              </svg>
            </div>
          <CardsWrapper/>
        </main>
    </>
  )
}

export default IndexPage
