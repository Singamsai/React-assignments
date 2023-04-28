import React, { useEffect, useState } from 'react'
import './homework13.css'

export default function Homework13() {
    const [inputvalue, setInputvalue] = useState("");
    const [apidata, setapidata] = useState([])
    const [category, setCategory] = useState('')
    useEffect(()=>{
        if(category.length>0){
            fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())
        .then((data)=>{setapidata(data)})
        }
        else{
            fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then((data)=>{setapidata(data)})
        }
    },[category])
  return (
    <div className='homework13' >
      <h1>Products</h1>
      <div className='homework13_input'>
        <input type='text' value={inputvalue} onChange={(e)=>{setInputvalue(e.target.value)}} placeholder='search here...'/>
        <button onClick={()=>{setCategory(inputvalue)}}>Search</button>
      </div>
      <p style={{margin:'1rem'}}>Search for these Categories   
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"</p>
      <>
        {apidata.length===0?<h1>no data available</h1>:
        <div className='homework13_products'>
            {apidata.map((ele)=>{
                return (<div className='homework13_product'>
                    <img src={ele.image} width={300} height={300} alt=""></img>
                    <div style={{padding: '1rem'}}>
                        <p><b>Price:</b> {ele.price}</p>
                        <p><b>Title:</b> {ele.title}</p>
                        <p><b>Category:</b> {ele.category}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>)
            })}
        </div>
        }
        </>
    </div>
  )
}
