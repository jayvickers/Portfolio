import * as React from "react"
import { useState, useEffect } from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';

// styles
const Title = styled.h1`  
  color: #333333;
`;

const pageStyles = {
    display: "flex",
    justifyContent: "center"
};
const pageStyles2 = {
    width: "6rem"
};
// markup
const Hello = () => {
    
  return (
      <div style={pageStyles} className="intro-container"> 
        <div style={pageStyles2} >
            <Typing speed={65}>
                <Typing.Delay ms={250} />
                <Title>Hola</Title>
                <Typing.Delay ms={600} />
                <Typing.Backspace count={4} />       
                <Typing.Delay ms={250} />
                <Title>Ciao</Title>
                <Typing.Delay ms={500} />
                <Typing.Backspace count={4} />
                <Typing.Delay ms={250} />
                <Title>Hello.</Title>
            </Typing>
            </div>
        <Title>I'm Jay Vickers</Title>
    </div>
  )
}

export default Hello
