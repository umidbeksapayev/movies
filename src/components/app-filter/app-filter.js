import React, { lazy } from 'react'
import './app-filter.css'
export const AppFilter = ({updateFilterHandler, filter}) => {
  return (
    <div className='btn-group'>
      {btnArr.map(btn =>(

        <button key={btn.name} onClick={()=>{updateFilterHandler(btn.name)}} className={`btn ${ filter == btn.name ? 'btn-dark' : 'btn-outline-dark'}`} >{btn.label}</button>
      ))}
    </div>
  )
}

const btnArr = [
  {name:'all',label:'hamma kinolar'},
  {name:'popular', label:'mashhur kinolar'},
  {name:'mostViewers', label:"eng ko'p ko'rilgan kinolar"}
]
