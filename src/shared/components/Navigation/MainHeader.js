import React from 'react'
import './MainHeader.css'

export const MainHeader = prop => {
  return (
    <header className='main-header'>
        {prop.children}
    </header>
  )
}
export default MainHeader;

