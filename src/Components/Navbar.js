import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  // let myStyle = {
  //   color:'white',
  //   backgroundColor: 'black',
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");

  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
  <div className="container-fluid" >
    <a className="navbar-brand" href="/"> <strong><i>{props.title}</i> </strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.tutorial}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Tools
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Words Manipulator</a></li>
            <li><a className="dropdown-item" href="/">World Clock</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Other Tools</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href = "/" aria-disabled="true">{props.about}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={submitHandler} className="btn btn-outline-primary" type="submit" placeholder="Search" >Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

