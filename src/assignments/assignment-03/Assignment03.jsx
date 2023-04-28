import React, { createElement } from 'react'
import {SlOptionsVertical } from 'react-icons/sl'

export default function Assignment03() {
    const container = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:'3rem auto',
        boxShadow:"0 0 3px black",
        width: '300px',
        borderRadius: "12px"
    }
    const image={
        margin:"1rem"
    }
    const button = {
        padding:'3px',
        borderRadius:'4px',
        border:"none",
        outline: 'none',
        backgroundColor:'red',
        color:'white'
    }
  return React.createElement('div',{style:container},
  createElement('div',{},
  createElement('div',{style:{display:'flex',justifyContent:'space-between',margin:'0 -3rem -3rem -3rem',padding:"1rem 0"}},
  createElement('button',{style:button},"+"),
  createElement('button',{style:button},<SlOptionsVertical style={{fontSize:'.8rem'}}/>)),
  createElement('img',{src:'https://tse3.mm.bing.net/th?id=OIP.lP78JXvadCLAteVh41tXUAAAAA&pid=Api&P=0', style:image, width:150, height:120,})
  ,createElement('h1',{},<hr style={{margin:"0 -3.7rem"}}/>)
  ),
  createElement('h1',{style:{marginTop:"1.5rem"}},"Dima Blover"),
  createElement('p',{},"UI/UX Designer"),
  createElement('div',{style:{display:"flex",gap:"1rem",textAlign:'center',margin:'2rem'}},
  createElement('div',{},createElement('h2',{},"26"), createElement('p',{style:{color:'gray'}},"Shoot")),
  createElement('div',{},createElement('h2',{},"94"), createElement('p',{style:{color:'gray'}},"Following")),
  createElement('div',{},createElement('h2',{},"139"), createElement('p',{style:{color:'gray'}},"Followers")),
  ),

  )
}
