import * as React from 'react'
import styled from 'styled-components'

const listStyles = {
  display: 'grid',
  justifyContent: 'center',
  gridRowGap: '.5rem'
}

const ListItem = styled.li`    
    cursor: default;
    display: grid;
    grid-template-columns: 2rem auto;
    background-color: #E0F1F1;
    padding: .5rem;
    border-radius: 2px;
    box-shadow: 2px 2px 1px #d4d4d4;

    &:hover {    
        box-shadow: 3px 4px 1px #868686;
    }
`

// markup
const AboutMeList = () => {
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

}

export default AboutMeList
