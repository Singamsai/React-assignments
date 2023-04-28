import React from 'react'
import homeimage2 from './images/homeimage2.PNG'
import { SlOptionsVertical } from 'react-icons/sl'

export default function Home2(props) {
  return (
      <div className="class_assignments">
        <div className="class_assignments_01">
          <img src={homeimage2} alt="" />
          <div>
            <h3>{props.name}</h3>
            <p>{props.date}</p>
          </div>
        </div>
        <SlOptionsVertical />
      </div>
    
  )
}
