import React, { Component } from 'react'
import Map from './Map'
import PropTypes from 'prop-types'

class Detail extends Component {
  renderLocation = () => {
    const { location } = this.props.restaurant

    const street = location && location.formattedAddress[0]
      ? <p>{location.formattedAddress[0]}</p>
      : <p className='error'>Street address not available</p>

    const city = location && location.formattedAddress[1]
      ? <p>{location.formattedAddress[1]}</p>
      : <p className='error'>City and state address not available</p>
    
    return (
      <div>
        {street}
        {city}
      </div>
    )
  }

  renderContact = () => {
    const { contact } = this.props.restaurant

    const phone = (contact && contact.formattedPhone)
      ? <p><a href={`tel:${contact.phone}`} className='contact'>{contact.formattedPhone}</a></p>
      : <p className='contact error'>Phone not available</p>;
      
    const twitter = contact && contact.twitter
      ? <p className='contact'><a href={`https://twitter.com/@${contact.twitter}`} className='contact' target='_blank'>{`@${contact.twitter}`}</a></p>
      : <p className='contact error'>Twitter handle not available</p>;

    return (
      <div>
        {phone}
        {twitter}
      </div>
    )
  }

  render({ restaurant, isOpen } = this.props) {
    return (
      <div className={(isOpen) ? 'detail-panel detail-panel-open' : 'detail-panel'}>
        
        <Map location={restaurant.location} name={restaurant.name} restaurant={restaurant} />
        <div className='restaurant-details detail-banner'>
          <h1 className='restaurant-name'>{restaurant.name}</h1>
          <h2 className='restaurant-category'>{restaurant.category}</h2>
        </div>

        <div className='detail-group'>
          {this.renderLocation()}
          {this.renderContact()}
        </div>
      </div>
    )
  }
}

Detail.propTypes = {
  restaurant: PropTypes.shape({
    location: PropTypes.object,
    contact: PropTypes.object,
    name: PropTypes.string,
    category: PropTypes.string
  }),
  isOpen: PropTypes.bool
}

export default Detail