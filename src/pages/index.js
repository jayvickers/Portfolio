import * as React from "react";
import Hello from "../components/Hello";
import AboutMeList from "../components/AboutMeList";
import Header from "../components/Header";
import ExpCard from "../components/ExpCard";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useMediaQuery } from '../components/hooks/useMediaQuery';

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

const hgExpBullets = [
  'Build high-visibility front-end components in React.js and CSS to serve 30 million monthly views.',
  'Create microservices in C#, Node.js, and AWS Lambda to serve content and handle requests.',
  'Improve SEO rankings and Lighthouse/Google Analytics performance scores for high-value projects.'
];

const envExpBullets = [
  'Developed customer-specific modules using vanilla JavaScript, C# ASP.NET, and MVC architecture for a nationally-recognized immunization registry SaaS.',
  'Engineered custom unit and integration tests executed in Jest and Selenium testing frameworks.',
  'Wrote custom queries in TSQL and MySQL for large production databases.'
];

const encExpBullets = [
  'Developed software to analyze network traffic and improve throughput to remote Modbus and PLC communication devices.',
  'Created processes in C++ and Python to assist in automated oil and gas extraction.',
  'Assisted in installation of remote-control system software in active Oil Rigs and refinery equipment in live-production environments.'
];

// markup
const IndexPage = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');

  const containerStyles = {
    margin: isMobile ? "3rem 1rem" : "6rem 2rem"
  };

  const addInfoStyles = {
    textAlign: "center",
    margin: "3rem 0"
  }

  const expHeader = {
    textAlign: "center",
    margin: "3rem 0"
  }

  const expCardWrapper = {
    // justifyContent: "flex-end",
     display: "flex",
     justifyContent: "center",
     flexWrap: "wrap"
     //flexDirection: "row",
    // width: "100%",
    // height: "3rem",
    // backgroundColor: "#fbfbfb",
    // boxShadow: "0px 1px 5px #eaeaea",
    // position: "absolute",
    // top: "0"
 };   

  return (
    <>
      <Helmet title="foo bar">
        <script src="https://kit.fontawesome.com/504a442b12.js" crossorigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,200&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header/>
        <main style={containerStyles}>     
          <Hello isMobile={isMobile}/>
          <AboutMeList/>
          <p style={addInfoStyles}>Lets collaborate. Find me on 
          <HoverLinkBlue className="clean-link"  href="https://www.linkedin.com/in/jevengineering/">LinkedIn</HoverLinkBlue> and 
          <HoverLinkOrange className="clean-link"  href="https://github.com/jayvickers">GitHub</HoverLinkOrange></p>
          <h1 style={expHeader}>Stuff I've done</h1>
          <div style={expCardWrapper}>            
            <ExpCard title="Healthgrades" bullets={hgExpBullets}/>
            <ExpCard title="Envision Technology" bullets={envExpBullets}/>
            <ExpCard title="Encana Oil & Gas" bullets={encExpBullets}/>
          </div>
        </main>
    </>
  )
}

export default IndexPage
