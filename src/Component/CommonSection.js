import React from 'react'
import "../../src/Assets/css/commonsection.css"

export default function Commonsection(props) {
  return (
    <div className='common-bg'>
      <div className='container'>
            <h1 className='text-white display-5'>{props.title}</h1>
      </div>
    </div>
  )
}
