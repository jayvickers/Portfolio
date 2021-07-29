import * as React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';

const listStyles = {
  display: "grid",
  justifyContent: "center",
  gridRowGap: ".5rem"
}

const ListItem = styled.li`    
    cursor: default;
    display: grid;
    grid-template-columns: 2rem auto;
    background-color: #fbfbfb;
    padding: .5rem;
    border-radius: 2px;
    box-shadow: 2px 3px 1px #eaeaea;

    &:hover {    
        box-shadow: 3px 4px 1px #d4d4d4;
    }
`;


// markup
const AboutMeList = ({ isMobile }) => {

   
  
  return (  
    <ul style={listStyles}>
        <ListItem>
            <i className="fas fa-cogs fa-sm"></i>
            <span>Full Stack Software Engineer</span>
        </ListItem>
        <ListItem>
            <i className="fas fa-tachometer-alt fa-sm"></i>
            <span>React Performance Guru</span>
        </ListItem>
        <ListItem>
            <i className="fas fa-comments fa-sm"></i>        
            <span>Polyglot in training</span>
        </ListItem>
    </ul>
  )
}

AboutMeList.propTypes = {
    isMobile: PropTypes.bool
};

export default AboutMeList
