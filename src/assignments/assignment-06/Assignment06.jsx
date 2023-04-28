import React from 'react'
import './assignment06.css'
import image1 from './image1.PNG'
import image2 from './image2.PNG'
import image3 from './image3.PNG'
import logo from './hootsuiteLogo.PNG'

export default function Assignment06() {
  return (
    <div className='assignment06'>
        <div className='assignment06_header'>
            <div className='assignment06_header_left'>
                <img src={logo} alt="" />
                <ul>
                    <li>Platform</li>
                    <li>Plans</li>
                    <li>Enterprise</li>
                    <li>Resources</li>
                    <li>Education</li>
                </ul>
            </div>
            <div className='assignment06_header_right'>
                <p>Contact Us</p>
                <p>Log In</p>
                <button className='assignment06_signUp'>Sign Up</button>
            </div>
        </div>
        <div className='assignment06_body'>
            <h1 style={{fontSize:"3.5rem"}}>See value from social sooner</h1>
            <p style={{fontSize:"1.3rem",color:'gray'}}>Our training and strategic services hae helped <br/> thousands of organizationas succeed on social. </p>
            <button>Request a Demo</button>
        </div>
        <div className="assignment06_footer">
            <div>
                <img src={image1} alt=""/>
                <h2 >2,500</h2>
                <p>enterprise organizations successfully launched</p>
            </div>
            <div>
                <img src={image2} alt=""/>
                <h2>45,000</h2>
                <p>enterprise users onboarded seamlessly</p>
            </div>
            <div>
                <img src={image3} alt=""/>
                <h2>200,000+</h2>
                <p>professionals trained on product and strategy</p>
            </div>
        </div>
    </div>
  )
}
