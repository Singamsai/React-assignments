import React, { createElement } from 'react'

export default function Homework01() {

  const document = {
    margin:'3rem',
  }
  const link = {
    color:'blue',
    padding: "1rem 0",
    textDecorationLine: "underline",
  }

  return React.createElement('div', {style:document}, 
  createElement('h1', {}, "Topics covered"),
  createElement('p',{style:{margin:"1rem 0"}}, "The following is a list of all the topics we cover in the MDN learning area." ),
  createElement('a', {style:link}, "Getting started with  the web"),
  createElement('p', {style:{margin:"1rem "}}, "Provides a practical introduction to web development for complete beginners."),
  createElement('a', {style:link}, "HTML -- Structuring  the web"),
  createElement('p', {style:{margin:"1rem "}}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."),
  createElement('a', {style:link}, "CSS -- Styling the web"),
  createElement('p', {style:{margin:"1rem"}}, "CSS is the language that we use tto control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."),
  
  )
}
