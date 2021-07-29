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

const FrontEndStyle = styled.span` 
  border-radius: 2px;   
  box-shadow: 0 0 2px rgb(99 183 183 / 50%), inset 0 -1.375em 0 rgb(99 183 183 / 100%);
  color: white;
  padding: 0 2px 2px;
  position: relative;
`;

const BackEndStyle = styled.span` 
  border-radius: 2px;   
  box-shadow: 0 0 2px rgb(210 100 102 / 50%), inset 0 -1.375em 0 rgb(210 100 102 / 100%);
  color: white;
  padding: 0 2px 2px;
  position: relative;
`;

const TestingStyle = styled.span` 
  border-radius: 2px;   
  box-shadow: 0 0 2px rgb(177 144 127 / 50%), inset 0 -1.375em 0 rgb(177 144 127 / 100%);
  color: white;
  padding: 0 2px 2px;
  position: relative;
`;

const HighlightStyle = styled.span` 
  border-radius: 2px;   
  box-shadow: 0 0 2px rgb(204 163 14 / 50%), inset 0 -1.375em 0 rgb(204 163 14 / 100%);
  color: white;
  padding: 0 2px 2px;
  position: relative;
`;

const hgExpBullets = [
  <div>Build high-visibility front-end components in <FrontEndStyle>React.js</FrontEndStyle> and <HighlightStyle>CSS</HighlightStyle> to serve 30 million monthly views.</div>,
  <div>Create microservices in <BackEndStyle>C#</BackEndStyle>, <BackEndStyle>Node.js</BackEndStyle>, and AWS Lambda to serve content and handle requests.</div>,
  <div>Improve <HighlightStyle>SEO</HighlightStyle> rankings and Google Analytics performance scores for high-value projects.</div>,
  <div>Build automated test suites in <TestingStyle>Jest</TestingStyle> and <TestingStyle>Selenium</TestingStyle> testing frameworks executed on GitLab CI.</div>,
];

const envExpBullets = [
  <div>Developed customer-specific modules using vanilla <FrontEndStyle>JavaScript</FrontEndStyle>, <BackEndStyle>C# ASP.NET</BackEndStyle>, and MVC architecture for a nationally-recognized immunization registry SaaS.</div>,
  <div>Engineered custom unit and integration tests executed in <TestingStyle>NUnit</TestingStyle> and <TestingStyle>Selenium</TestingStyle> testing frameworks.</div>,
  <div>Wrote custom queries in <BackEndStyle>TSQL</BackEndStyle> and <BackEndStyle>MySQL</BackEndStyle> for large production databases.</div>
];

const encExpBullets = [
  <div>Developed software to analyze network traffic and improve throughput to remote Modbus and PLC communication devices.</div>,
  <div>Created processes in <BackEndStyle>C++</BackEndStyle> and <FrontEndStyle>Python</FrontEndStyle> to assist in automated oil and gas extraction.</div>,
  <div>Assisted in installation of remote-control system software in active Oil Rigs and refinery equipment in live-production environments.</div>
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
