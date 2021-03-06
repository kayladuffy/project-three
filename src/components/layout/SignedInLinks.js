import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return(
      <ul className="right">
          <li><NavLink to='/create'>Todos</NavLink></li>
          <li><NavLink to='/'>Past Todos</NavLink></li>
          <li><NavLink to='/' className='btn btn-floating pink lighten-1'>KD</NavLink></li>
      </ul>   
  )  
}

export default SignedInLinks
