import React from 'react'
//import headerPhoto from ''

export const Header = () => {
  const url = require('docs/static/media/card-segurtec.0ce4706aa6b87b2ac671.png')
  return (
    <div className='header'>
   <img className='company-img'
       src={url}
        alt="Company Logo"
      />
</div>
  )
}


