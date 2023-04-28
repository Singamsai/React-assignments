import React, { createElement } from 'react'

export default function Homeword02() {
    const image={
        borderRadius:"50%",
        margin:"1rem"
    }
    const container = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:'3rem'
    }
    const button = {
        padding: ".8rem 2.5rem",
        fontSize:'1rem',
        borderRadius: "8px",
        border:'none',
        outline:'none',
        color:"white",
        backgroundColor:'blue'
    }
    const back={
        padding: ".8rem 2.5rem",
        fontSize:'1rem',
        borderRadius: "8px",
        border:'none',
        outline:'none',
        color:"white",
        backgroundColor:"gray"
    }
  return React.createElement('div',{style:container},
  createElement('img',{src:'https://tse2.mm.bing.net/th?id=OIP.88U_XTsYICEJKNBtXBG9gAHaLH&pid=Api&P=0', style:image, width:100, height:100, }),
  createElement('h1',{},"Alexandra Caulea"),
  createElement('p',{style:{fontSize:'1.2rem',}},"I enjoy drinking a cup of coffee every day"),
  createElement('div',{style:{display:"flex",gap:"1rem",textAlign:'center',margin:'2rem'}},
  createElement('div',{},createElement('h2',{style:{color:'skyblue'}},"172"), createElement('h3',{},"POSTS")),
  createElement('div',{},createElement('h2',{style:{color:'skyblue'}},"47"), createElement('h3',{},"FOLLOWERS")),
  createElement('div',{},createElement('h2',{style:{color:'skyblue'}},"20"), createElement('h3',{},"FOLLOWING")),
  ),
  createElement('div',{style:{display:'flex',gap:'2rem'}}, createElement('button',{style:button},"FOLLOW"),
  createElement('button',{style:back},"MESSAGE")
  )
  )
}
