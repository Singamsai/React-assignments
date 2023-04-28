import React from 'react'
import './homework06.css'
import {ImFacebook,ImTwitter,ImInstagram} from 'react-icons/im'

export default function Homework06() {
  return (
    <div className='homework06'>
      <div className='homework06_nav'>
        <h1>Logo</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='socialmedia'>
        <ImFacebook/>
        <ImTwitter/>
        <ImInstagram/>
        </div>
      </div>
      <div className='homeword06_body'>
        <div className='homeword06_body_left'>
            <h1 style={{fontSize:'4rem'}}>Header<br/>Footer</h1>
            <p style={{fontSize:'1.5rem'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque sapiente,<br/> perferendis beatae vitae asperiores, qui cumque rerum assumenda expedita!</p>
        </div>
        <div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.OjNHJL6A-Lzw_jLJfFgtMwHaEK&pid=Api&P=0" width={600} height={400} alt=""/>
        </div>
      </div>
      <div className='footer'>
        <div>
          <h3>Block header</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis voluptatibus aspernatur eius, quas laboriosam quasi asperiores dolore illo velit?</p>
        </div>
        <div>
          <h3>Block header</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis voluptatibus aspernatur eius, quas laboriosam quasi asperiores dolore illo velit?</p>
        </div>
        <div>
          <h3>Block header</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis voluptatibus aspernatur eius, quas laboriosam quasi asperiores dolore illo velit?</p>
        </div>
      </div>
    </div>
  )
}
