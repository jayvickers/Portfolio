import * as React from 'react'
import PropTypes from 'prop-types'

const ExpCard = ({ bullets, title }) => {
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
  let count = 0
  const updateCnt = () => { count = count + 1 }
  return (
    <div className="exp-card">
    <h3>{title}</h3>
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
  title: PropTypes.string
}
export default ExpCard
