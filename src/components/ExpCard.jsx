import * as React from "react"
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ExpCard = ({ bullets, title }) => {
    
    const expCardWrapperStyles = {
        display: "flex",        
        flexDirection: "column",       
        backgroundColor: "#fbfbfb",
        borderRadius: "2px",
        boxShadow: "2px 3px 1px #eaeaea",
        margin: "0 0.5rem 1rem 0.5rem",
        padding: "1rem",
        flex: "0 1 35%",        
        minWidth: "300px"
    };   

    const cardListItemStyles = {
        display: "flex",        
        alignItems: "flex-start"
    }; 

    const cardIconStyles = {
        margin: "4px 4px 0 0"
    }; 

    const listStyles = {
        display: "grid",
        gridRowGap: "1rem"
    }; 
        
  return (
    <div style={expCardWrapperStyles}> 
       <h3>{title}</h3>
       <ul style={listStyles}>
        {!!bullets && bullets.map((bullet) =>  
            <li style={cardListItemStyles} key={bullet[0]+bullet[1]+bullet[2]}>
                <i style={cardIconStyles} className="fas fa-arrow-right fa-xs"/>
                {bullet}
            </li>        
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
