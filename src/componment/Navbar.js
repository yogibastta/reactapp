import React from 'react';
import PropTypes from 'prop-types';

export const Navbar = (props) => {
  return (
    
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.alt}</a>
      </li>
      
    </ul>
    
    <div className={`form-check form-switch custom-switch text-${props.mode==='light' ? 'dark' : 'light' }`}>
      <input type="checkbox" onClick={props.toggleMode} className="form-check-input" id="customSwitch1"/>
      <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
    </div>
   
  </div>
</nav>


  )
}


Navbar.prototype = {
    title: PropTypes.string,
    alt : PropTypes.string
}

Navbar.defaultProps = {
    title: 'Hello Defult',
    alt: 'Default About'
}
