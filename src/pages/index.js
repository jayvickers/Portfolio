import * as React from "react"
import Hello from "../components/Hello"
import { Helmet } from 'react-helmet'
import styled from 'styled-components';
import { useMediaQuery } from '../components/hooks/useMediaQuery'

// styles
// const containerStyles = {
  
//   //backgroundColor: "#fcf4f2",
 
//   margin: "6rem"
//   //fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }

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
  border-radius: 20px;
  box-shadow: 2px 3px 1px #eaeaea;

  &:hover {    
    box-shadow: 3px 4px 1px #eaeaea;
  }
`;


// markup
const IndexPage = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');

  const containerStyles = {
    margin: isMobile ? "2rem" : "6rem"
  };
  return (
   <>
    <Helmet title="foo bar">
      <script src="https://kit.fontawesome.com/504a442b12.js" crossorigin="anonymous"></script>
    </Helmet>
      <main style={containerStyles}>     
        <Hello/>
        <ul style={listStyles}>
          <ListItem>
            <i class="fas fa-cogs fa-sm"></i>
            <span>Full Stack Software Engineer</span>
          </ListItem>
          <ListItem>
            <i class="fas fa-tachometer-alt fa-sm"></i>
            <span>React Performance Guru</span>
          </ListItem>
          <ListItem>
            <i class="fas fa-comments fa-sm"></i>        
            <span>Polyglot in training</span>
          </ListItem>
        </ul>
      </main>
    </>
  )
}

export default IndexPage
