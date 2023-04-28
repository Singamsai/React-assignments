import React from 'react'
import './homework04.css'

export default function Homework04() {
  return (
    <div className='home04'>
        <div className='homework04'>
      <img src="https://tse2.mm.bing.net/th?id=OIP.88U_XTsYICEJKNBtXBG9gAHaLH&pid=Api&P=0" width={100} height={100} alt=""/>
      <h1>Alexandra Caulea</h1>
      <p>I enjoy drinking a cup of coffee every day</p>
      <div className='count'>
            <div>
                <h2>172</h2>
                <p>POSTS</p>
            </div>
            <div>
                <h2>47</h2>
                <p>FOLLOWERS</p>
            </div>
            <div>
                <h2>20</h2>
                <p>FOLLOWING</p>
            </div>
      </div>
      <div style={{display:'flex',gap:'2rem'}}>
        <button className='buttons' style={{backgroundColor:"blue"}}>FOLLOW</button>
        <button className='buttons'>MESSAGE</button>  
      </div>  
    </div>
    </div>
  )
}
