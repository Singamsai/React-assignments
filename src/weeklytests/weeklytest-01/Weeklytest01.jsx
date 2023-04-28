import React from "react";
import "./weeklytest01.css";
import images from "./Images.PNG"
import Author from "./Author.PNG"
import Elements from './Elements.PNG'
import Responsive from './Responsive.PNG'
import {TfiCup,TfiTwitter} from 'react-icons/tfi'
import {RiSuitcaseLine} from 'react-icons/ri'
import {BsFillCarFrontFill} from 'react-icons/bs'

export default function Weeklytest01() {
  return (
    <div className="weeklytest01">
      <div className="weeklytest01_nav">
        <div>
          <h1>FlexBusinessPro</h1>
          <p>Clean and Modern Business Theme</p>
        </div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Styleguide</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="weeklytest01_body">
        <h1 style={{fontSize:'4rem'}}>Your Awesome Business Theme</h1>
        <p style={{fontSize:'1.5rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur
          quia
          <br /> voluptatibus aliquam impedit culpa! Vero minus ullam aspernatur
          odit 
        </p>
        <button>READ MORE</button>
      </div>
      <div className="ourfeatures">
        <h1>Our Features</h1>
        <div className="features">
          <div>
            <img src={Author} alt="" />
            <h3>Trusted Author</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              pariatur consequuntur corporis, blanditiis magnam aut!
            </p>
            <p style={{color:'blue', padding: '1.5rem'}}>Readmore</p>
          </div>
          <div>
            <img src={Responsive} alt="" />
            <h3>Fully Responsive</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              pariatur consequuntur corporis, blanditiis magnam aut!
            </p>
            <p style={{color:'blue', padding: '1.5rem'}}>Readmore</p>
          </div>
          <div>
            <img src={Elements} alt="" />
            <h3>Reusable Elements</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              pariatur consequuntur corporis, blanditiis magnam aut!
            </p>
            <p style={{color:'blue', padding: '1.5rem'}}>Readmore</p>
          </div>
        </div>
      </div>
      <div className="awards">
        <div>
          <TfiCup style={{fontSize:'6rem', margin:'.8rem 0'}}/>
          <h1>21</h1>
          <p>Awards Winning</p>
        </div>
        <div>
          <RiSuitcaseLine style={{fontSize:'6rem', margin:'.8rem 0'}}/>
          <h1>145</h1>
          <p>Finished Projects</p>
        </div>
        <div>
          <BsFillCarFrontFill style={{fontSize:'6rem', margin:'.8rem 0'}}/>
          <h1>349</h1>
          <p>Products Sold</p>
        </div>
        <div>
          <TfiTwitter style={{fontSize:'6rem', margin:'.8rem 0'}}/>
          <h1>2456</h1>
          <p>Twitter Fans</p>
        </div>
      </div>
      <div className="weeklytest01_footer">
        <div >
          <h2>ABOUT FLEX BUSINESS PRO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Fugiat
            necessitatibus molestias illo officiis quia nobis<br/> beatae sed labore
            repudiandae sapiente in sit nihil<br/> libero dignissimos minima cumque
            veritatis, similique rem.
          </p>
        </div>
        <div>
          <h2>RECENT POSTS</h2>
          <div>
            <div>
              <h3>Fly to London</h3>
              <p>September 18, 2018</p>
            </div>
            <div>
              <h3>Fly to London</h3>
              <p>September 18, 2018</p>
            </div>
            <div>
              <h3>Fly to London</h3>
              <p>September 18, 2018</p>
            </div>
          </div>
        </div>
        <div>
          <h2>GELLERIES</h2>
          <div>
            <img src={images} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
