import React from 'react'
import './Nav.css'
import {Link}from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
    <ul>
      <Link to="/">
      <li>Home</li>
      </Link>
      <Link to='/categories'>
      <li>categories</li>
      </Link>
      <Link to='/saved'>
      <li>saved</li>
      </Link>
    </ul>
  </div>
  )
}
