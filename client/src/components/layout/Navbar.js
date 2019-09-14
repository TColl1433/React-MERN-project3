import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <li className='navbar bg-dark'>
      <h1>
        <Link to='/'>Tennis Buddy</Link>
      </h1>
      <ul>
        <li>
          <a href='!#'>Players</a>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </li>
  );
};

export default Navbar;
