import * as React from "react"
import Typing from 'react-typing-animation';
import PropTypes from 'prop-types';

const Hello = () => {
    
  return (
      <div className="intro-container" className="intro-container"> 
        <div className="intro-container__typing" >
            <Typing speed={65}>
                <Typing.Delay ms={250} />
                <h1>Hola</h1>
                <Typing.Delay ms={700} />
                <Typing.Backspace count={4} />       
                <Typing.Delay ms={250} />
                <h1>Ahoj</h1>
                <Typing.Delay ms={500} />
                <Typing.Backspace count={4} />
                <Typing.Delay ms={250} />
                <h1 className="underline-title">Hello.</h1>
            </Typing>
        </div>
        <h1 className="intro-container__title">I'm Jay Vickers</h1>
    </div>
  )
}

Hello.propTypes = {
    
};
export default Hello
