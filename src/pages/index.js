import * as React from "react"
import Hello from "../components/Hello"
import AboutMeList from "../components/AboutMeList"
import { Helmet } from 'react-helmet'
import styled from 'styled-components';
import { useMediaQuery } from '../components/hooks/useMediaQuery'

const HoverLinkBlue = styled.a`
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
  box-shadow: 0 10px 0 0 rgb(241 80 47 / 0%), inset 0 -0.125em rgb(241 80 47 / 20%);
  padding: 0 2px 2px;
  position: relative;
  transition-duration: .2s;
  transition-property: box-shadow,color;
  text-decoration: none;
  color: currentColor;
  &:hover { 
    border-radius: 2px;   
    box-shadow: 0 0 2px rgb(241 80 47 / 75%), inset 0 -1.375em 0 rgb(241 80 47 / 75%);
    color: white;
  }
`;

// markup
const IndexPage = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');

  const containerStyles = {
    margin: isMobile ? "2rem" : "6rem"
  };

  const addInfoStyles = {
    textAlign: "center"
  }

  // const hoverLink = {
  //   boxShadow: "0 10px 0 0 rgb(85 172 238 / 0%), inset 0 -0.125em rgb(85 172 238 / 20%)",
  //   padding: "0 2px 2px",
  //   position: "relative",
  //   transitionDuration: ".2s",
  //   transitionProperty: "box-shadow,color"
  // };
  return (
   <>
    <Helmet title="foo bar">
      <script src="https://kit.fontawesome.com/504a442b12.js" crossorigin="anonymous"></script>
    </Helmet>
      <main style={containerStyles}>     
        <Hello isMobile={isMobile}/>
        <AboutMeList/>
        <p style={addInfoStyles}>Lets collaborate, find me on <HoverLinkBlue href="https://www.linkedin.com/in/jevengineering/">LinkedIn</HoverLinkBlue> and <HoverLinkOrange href="https://github.com/jayvickers">GitHub</HoverLinkOrange></p>
      </main>
    </>
  )
}

export default IndexPage
