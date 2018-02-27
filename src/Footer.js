import React from 'react'
import PropTypes from 'prop-types'

const Footer = props =>
  <ul>
    {props.guests.map ((guest, index) =>
      <li 
      key={index}>
      {guest.name}
        <button onClick={() => props.removeGuestAt(index)}>remove </button>
      </li>
    )}
  </ul> 

Footer.PropTypes = {
  guests: PropTypes.func.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired
}

export default Footer