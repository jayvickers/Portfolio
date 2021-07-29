import * as React from "react"
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ExpCard = ({ bullets, title }) => {
    const [linkedInHovering, setlinkedInHovering] = useState(false);
    const [githubHovering, setGithubHovering] = useState(false);
    const headerStyles = {
       // justifyContent: "flex-end",
        display: "flex",        
        flexDirection: "column",
        maxWidth: "350px",
        backgroundColor: "#fbfbfb",
        borderRadius: "2px",
        boxShadow: "2px 3px 1px #eaeaea",
        margin: "0 1rem",
        padding: "1rem",
        flex: "1 1 250px",
        maxWidth: "350px",
        minWidth: "250px"
        //flexDirection: "row",
       // width: "100%",
       // height: "3rem",
       // backgroundColor: "#fbfbfb",
       // boxShadow: "0px 1px 5px #eaeaea",
       // position: "absolute",
       // top: "0"
    };   
        
  return (
    <div style={headerStyles}> 
       <h3>{title}</h3>
       <ul>
       {!!bullets && bullets.map((bullet) => 
        <li key={bullet[0]+bullet[1]+bullet[2]}>{bullet}</li>
       )}
       </ul>
    </div>
  )
}

ExpCard.propTypes = {
    bullets: PropTypes.array,
    title: PropTypes.string
};
export default ExpCard
