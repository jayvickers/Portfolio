import * as React from "react"
import Typing from 'react-typing-animation';
import PropTypes from 'prop-types';

const Hello = ({isMobile}) => {


const h1Styles = {
    color: "#333333"
};

const h1Styles2 = {
    color: "#333333",
   // marginBlockEnd: isMobile ? "0" : "21.44px",
    marginBlockStart: isMobile ? "0" : "21.44px"
};

const containerStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: isMobile ? "column" : "row"
};

const typingStyles = {
    width: isMobile ? "auto" : "6rem" ,
    minHeight: isMobile ? "78.875px" : "auto"   
};
    
  return (
      <div style={containerStyles} className="intro-container"> 
        <div style={typingStyles} >
            <Typing speed={65}>
                <Typing.Delay ms={250} />
                <h1 style={h1Styles}>Hola</h1>
                <Typing.Delay ms={700} />
                <Typing.Backspace count={4} />       
                <Typing.Delay ms={250} />
                <h1 style={h1Styles}>Ahoj</h1>
                <Typing.Delay ms={500} />
                <Typing.Backspace count={4} />
                <Typing.Delay ms={250} />
                <h1 style={h1Styles}>Hello.</h1>
            </Typing>
        </div>
        <h1 style={h1Styles2}>I'm Jay Vickers</h1>
    </div>
  )
}

Hello.propTypes = {
    isMobile: PropTypes.bool
};
export default Hello
