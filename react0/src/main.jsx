import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'



const ReactElement= React.createElement(
  'a' ,
  {href : 'https://www.google.com', target :'_blank'},
  'click me'
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ReactElement} 
    <App/> 
    {/* Instead of using <ReactElement /> (which expects a component), use curly braces {ReactElement} to render the created React element. */}
  </StrictMode>,
)
