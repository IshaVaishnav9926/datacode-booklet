import React from 'react'
import Bell from "../assets/Bell.png"
import Ellipse from "../assets/Ellipse1.png"
import search from "../assets/search.png"
import { BsJustify } from 'react-icons/bs'

function Navbar({ openSidebar }) {

  return (
    <header className='header  '>
      <div onClick={openSidebar} className='menu-icon  d-inline d-lg-none  text-white'>
        <BsJustify className="icon" />
      </div>
      <div className='header-left ' style={{ width: '65%' }}>
        <div class="input-group "  >
          <input type="text" style={{ backgroundColor: '#1D1D2A' }} class="form-control text-white border border-end-0  " aria-label="Dollar amount (with dot and two decimal places)" />
          <span class="input-group-text border border-start-0 " style={{ backgroundColor: '#1D1D2A' }}><img src={search} height={20} width={20} /></span>
        </div>
      </div>
      <div className='header-right'>
        <span className='px-lg-3 '> <img src={Bell} style={{ height: '4vmin' }} /> </span>
        <span className=' px-lg-3' > <img src={Ellipse} style={{ height: '7vmin' }} /> </span>
      </div>
    </header>
  )
}

export default Navbar