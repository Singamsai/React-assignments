import React, { createElement } from 'react'

export default function Assignment01() {
    const link = {
        color: 'blue',
        textDecorationLine: "underline",
    }
  return React.createElement('div',{style:{margin:'3rem'}},
  createElement('h1',{}, "Learn web development"),
  createElement('p',{style:{margin:"1rem 0",fontSize:'1.2rem'}}, "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites."),
  createElement('p',{style:{margin:"1rem 0",fontSize:'1.2rem'}}, "The aim of this area of MDN is not to take you from 'beginner' to 'expert' but to take you from 'beginner' to 'comfortable.' From there, you should be able to start making your way, learning from ",createElement('a',{style:link},"the rest of MDN,"),"and other intermediate to advanced resources that assume a lot of previous knowledge."),
  createElement('p',{style:{margin:"1rem 0",fontSize:'1.2rem'}}, "if you are a complete beginner, web development can be challenging __ we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.")
    
  )
}
