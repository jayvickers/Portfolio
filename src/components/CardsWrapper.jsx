import * as React from "react"
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ExpCard from "./ExpCard";
import styled from 'styled-components';

const TestingStyle = styled.span` 
  box-shadow: 0 10px 0 0 rgb(204 163 14 / 0%), inset 0 -0.125em 0 rgb(204 163 14 / 100%);
  padding: 0 2px 2px;
  position: relative;
`;

const HighlightStyle = styled.span`
  box-shadow: 0 10px 0 0 rgb(204 163 14 / 0%), inset 0 -0.125em 0 rgb(204 163 14 / 100%);
  padding: 0 2px 2px;
  position: relative;
`;


const CardsWrapper = ({ bullets, title }) => {
    const [feHovering, setFeHovering] = useState(false);
    const [beHovering, setBeHovering] = useState(false);
    const [testHovering, setTestHovering] = useState(false);

    const FEStyles = {
        boxShadow:  feHovering ? "0 0 2px rgb(99 183 183 / 75%), inset 0 -1.375em 0 rgb(99 183 183 / 100%)" : "0 10px 0 0 rgb(99 183 183 / 0%), inset 0 -0.125em 0 rgb(99 183 183 / 100%)",
        padding: "0 2px 2px",
        position: "relative",
        borderRadius: feHovering ? "2px" : "0",
        color: feHovering ? "white" : "currentColor"
      }

      const BEStyles = {
        boxShadow:  beHovering ? "0 0 2px rgb(210 100 102 / 75%), inset 0 -1.375em 0 rgb(210 100 102 / 100%)" : "0 10px 0 0 rgb(210 100 102 / 0%), inset 0 -0.125em 0 rgb(210 100 102 / 100%)",
        padding: "0 2px 2px",
        position: "relative",
        borderRadius: beHovering ? "2px" : "0",
        color: beHovering ? "white" : "currentColor"
      }

      const TestStyles = {
        boxShadow:  testHovering ? "0 0 2px rgb(204 163 14 / 75%), inset 0 -1.375em 0 rgb(204 163 14 / 100%)" : "0 10px 0 0 rgb(204 163 14 / 0%), inset 0 -0.125em 0 rgb(204 163 14 / 100%)",
        padding: "0 2px 2px",
        position: "relative",
        borderRadius: testHovering ? "2px" : "0",
        color: testHovering ? "white" : "currentColor"
      }
      

    const hgExpBullets = [
        <div>Build high-visibility front-end components in <span style={FEStyles} onMouseEnter={() => setFeHovering(true)}
        onMouseLeave={() => setFeHovering(false)}>React.js</span> and <span style={FEStyles} onMouseEnter={() => setFeHovering(true)}
        onMouseLeave={() => setFeHovering(false)}>CSS</span> to serve 30 million monthly views.</div>,
        <div>Create microservices in <span style={BEStyles} onMouseEnter={() => setBeHovering(true)}
        onMouseLeave={() => setBeHovering(false)}>C#</span>, <span style={BEStyles} onMouseEnter={() => setBeHovering(true)}
        onMouseLeave={() => setBeHovering(false)}>Node.js</span>, and AWS Lambda to serve content and handle requests.</div>,
        <div>Improve <span style={FEStyles} onMouseEnter={() => setFeHovering(true)}
        onMouseLeave={() => setFeHovering(false)}>SEO</span> rankings and Google Analytics performance scores for high-value projects.</div>,
        <div>Build automated test suites in <span style={TestStyles} onMouseEnter={() => setTestHovering(true)}
        onMouseLeave={() => setTestHovering(false)}>Jest</span> and <span style={TestStyles} onMouseEnter={() => setTestHovering(true)}
        onMouseLeave={() => setTestHovering(false)}>Selenium</span> testing frameworks executed on GitLab CI.</div>,
      ];
      
      const envExpBullets = [
        <div>Developed customer-specific modules using vanilla <span style={FEStyles} onMouseEnter={() => setFeHovering(true)}
        onMouseLeave={() => setFeHovering(false)}>JavaScript</span>, <span style={BEStyles} onMouseEnter={() => setBeHovering(true)}
        onMouseLeave={() => setBeHovering(false)}>C# ASP.NET</span>, and MVC architecture for a nationally-recognized immunization registry SaaS.</div>,
        <div>Engineered custom unit and integration tests executed in <span style={TestStyles} onMouseEnter={() => setTestHovering(true)}
        onMouseLeave={() => setTestHovering(false)}>NUnit</span> and <span style={TestStyles} onMouseEnter={() => setTestHovering(true)}
        onMouseLeave={() => setTestHovering(false)}>Selenium</span> testing frameworks.</div>,
        <div>Wrote custom queries in <span style={BEStyles} onMouseEnter={() => setBeHovering(true)}
        onMouseLeave={() => setBeHovering(false)}>TSQL</span> and <span style={BEStyles} onMouseEnter={() => setBeHovering(true)}
        onMouseLeave={() => setBeHovering(false)}>MySQL</span> for large production databases.</div>
      ];
      
      const encExpBullets = [
        <div>Developed software to analyze network traffic and improve throughput to remote Modbus and PLC communication devices.</div>,
        <div>Created processes in <span style={BEStyles} onMouseEnter={() => setBeHovering(true)}
        onMouseLeave={() => setBeHovering(false)}>C++</span> and <span style={FEStyles} onMouseEnter={() => setFeHovering(true)}
        onMouseLeave={() => setFeHovering(false)}>Python</span> to assist in automated oil and gas extraction.</div>,
        <div>Assisted in installation of remote-control system software in active Oil Rigs and refinery equipment in live-production environments.</div>
      ];

      const freeLanceBullets = [
        <div>Developed software to analyze network traffic and improve throughput to remote Modbus and PLC communication devices.</div>,
        <div>Created processes in <span style={BEStyles} onMouseEnter={() => setBeHovering(true)}
        onMouseLeave={() => setBeHovering(false)}>C++</span> and <span style={FEStyles} onMouseEnter={() => setFeHovering(true)}
        onMouseLeave={() => setFeHovering(false)}>Python</span> to assist in automated oil and gas extraction.</div>,
        <div>Assisted in installation of remote-control system software in active Oil Rigs and refinery equipment in live-production environments.</div>
      ];

    const expCardWrapper = {       
         display: "flex",
         justifyContent: "center",
         flexWrap: "wrap",
         position: "relative"
     };  

     const expHeader = {
        textAlign: "center",
        margin: "3rem 0",
        width: "100%"
      }
        
  return (
      <>
   
    <div className="exp-card-wrapper" style={expCardWrapper}>    
    <h1 style={expHeader}>Stuff I've done</h1>  
    <div id="test"></div>      
        <ExpCard title="Healthgrades" bullets={hgExpBullets}/>
        <ExpCard title="Envision Technology" bullets={envExpBullets}/>
        <ExpCard title="Encana Oil & Gas" bullets={encExpBullets}/>
        <ExpCard title="Freelance and Side Projects" bullets={freeLanceBullets}/>
    </div>
    </>
  )
}

CardsWrapper.propTypes = {
    bullets: PropTypes.array,
    title: PropTypes.string
};
export default CardsWrapper
