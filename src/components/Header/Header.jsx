import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header className="header-cont">
       <p className='logo'>FAKESTORE</p>
       <input type='text' placeholder='search for items' />
       <div className="button-cont">
        <p className='login'>Login</p>
       </div>
    </header>
  )
}
