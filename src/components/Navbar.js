import './Navbar.css';
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const navBg={
        backgroundColor:'#e3f2fd'
    }
    const navBgDark={
        backgroundColor:'#363636'
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} `} style={props.mode==='light'?navBg:navBgDark}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>

                    </ul>
                    <button onClick={props.click} className="darkMode" ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg></button>
                    <form className="d-flex" >
                        <input className={`form-control me-2 bg-${props.mode}`}  type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
    
}

// if no props passes from app.js then this 👇🏻 default values will show
Navbar.defaultProps={
    title:'Set title here',
    about:'About text here'
}