import React from 'react'
import logo from "../../Netflix_2015_logo.png"
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"
const Header = () => {
  return (
    <nav className='header'  >
    
    <img src={logo} alt="Netflix Logo" className="header-logo" />
            <div className='content'>
                <Link to="/tvshows" >TV Shows</Link>
                <Link to="/movies" >Movies</Link>
                <Link to="/recent" >Recently Added</Link>
                <Link to="/mylist" >My List</Link>
            </div>
            <ImSearch className='search'/>
    </nav>
  )
}

export default Header
