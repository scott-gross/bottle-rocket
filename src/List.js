import React from 'react'
import PropTypes from 'prop-types'

const List = ({ restaurant, onSelect }) => (
  <div 
    className='restaurant' 
    onClick={() => onSelect({ ...restaurant })}
    style={{ 
      backgroundImage: `url('images/cellGradientBackground@2x.png'), url(${restaurant.backgroundImageURL})`, 
      backgroundSize: 'cover' }}>
    <div className='restaurant-details'>
      <h1 className='restaurant-name'>{restaurant.name}</h1>
      <h2 className='restaurant-category'>{restaurant.category}</h2>
    </div>
  </div>
)
// define object property types
List.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    backgroundImageURL: PropTypes.string
  }),
  onSelect: PropTypes.func
}

export default List