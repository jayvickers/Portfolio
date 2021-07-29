import * as React from 'react'
import PropTypes from 'prop-types'

const ExpCard = ({ bullets, isCurrent, title }) => {
  const cardListItemStyles = {
    display: 'grid',
    gridTemplateColumns: '10px 1fr',
    gridColumnGap: '.35rem'
  }

  const cardIconStyles = {
    margin: '4px 4px 0 0',
    alignItems: 'flex-start'
  }

  const listStyles = {
    display: 'grid',
    gridRowGap: '1rem'
  }

  const FEStyles = {
    transitionDuration: '.2s',
    transitionProperty: 'box-shadow,color',
    boxShadow: '0 0 2px rgb(241 80 47 / 75%), inset 0 -1.375em 0 rgb(241 80 47 / 100%)',
    padding: '0 2px 2px',
    borderRadius: '2px',
    color: 'white',
    position: 'absolute',
    right: '10px'
  }

  let count = 0
  const updateCnt = () => { count = count + 1 }
  return (
    <div className="exp-card">
    <h3 style={{ textAlign: 'center' }}>{title}</h3>
    {!!isCurrent && <span style={FEStyles}>Current Role</span> }
        <ul style={listStyles}>
            {!!bullets && bullets.map((bullet) =>
                <li style={cardListItemStyles} key={count}>
                    {updateCnt()}
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
  isCurrent: PropTypes.bool,
  title: PropTypes.string
}

ExpCard.defaultProps = {
  isCurrent: false
}
export default ExpCard
