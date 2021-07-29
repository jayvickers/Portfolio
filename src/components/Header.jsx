import * as React from 'react'
import { useState } from 'react'

const Header = () => {
  const [linkedInHovering, setlinkedInHovering] = useState(false)
  const [githubHovering, setGithubHovering] = useState(false)
  const headerStyles = {
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '3rem',
    backgroundColor: '#fbfbfb',
    boxShadow: '0px 1px 5px #eaeaea',
    position: 'absolute',
    top: '0'
  }

  const logoLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '5rem'
  }

  const linkedInStyles = {
    color: '#0072b1',
    boxShadow: linkedInHovering ? '3px 3px 3px #d4d4d4' : '2px 2px 2px #eaeaea',
    fontSize: linkedInHovering ? '2.2rem' : '2rem',
    borderRadius: '2px'
  }
  const gitHubStyles = {
    color: '#fda700',
    boxShadow: githubHovering ? '3px 3px 3px #d4d4d4' : '2px 2px 2px #eaeaea',
    fontSize: githubHovering ? '2.2rem' : '2rem',
    borderRadius: '2px',
    margin: '0 2rem'
  }

  return (
    <div style={headerStyles}>
        <a style={logoLinkStyles} onMouseEnter={() => { setlinkedInHovering(!linkedInHovering) }} onMouseLeave={() => { setlinkedInHovering(!linkedInHovering) }} className="clean-link" href="https://www.linkedin.com/in/jevengineering/">
            <i style={linkedInStyles} className="fab fa-linkedin fa-2x"></i>
        </a>
        <a style={logoLinkStyles} onMouseEnter={() => { setGithubHovering(!githubHovering) }} onMouseLeave={() => { setGithubHovering(!githubHovering) }} className="clean-link" href="https://github.com/jayvickers">
           <i style={gitHubStyles} className="fab fa-github fa-2x"></i>
        </a>
    </div>
  )
}

export default Header
