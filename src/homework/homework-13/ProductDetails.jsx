import React from 'react'

export default function ProductDetails({ele}) {
  return (
    <div>
      <img src={ele.image}></img>
      <div>
        <p>{ele.price}</p>
      </div>
    </div>
  )
}
