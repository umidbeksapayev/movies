import './app-info.scss'

import React from 'react'

export const AppInfo = ({allMoviesCount,favouriteMoviesCount}) => {
  return (
    <div className='app-info'>
        <p className='fs-3 text-uppercase'>Barcha ko'rilgan kinolar soni:{allMoviesCount}</p>
        <p className='fs-4 text-uppercase'>Sevimli Kino:{favouriteMoviesCount }</p>
    </div>
  )
}

