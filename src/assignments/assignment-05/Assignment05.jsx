import React from 'react'
import './assignment05.css'

export default function Assignment05() {
  return (
    <div className='assignment05'>
      <div className='assignment05_nav'>
        <h2 style={{color:"white"}}>Logo</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Order</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='assignment05_body'>
            <h1 >Home</h1>
            <p>Made with Love by <b style={{color:"red"}}>Learning robo</b></p>
      </div>
    </div>
  )
}
