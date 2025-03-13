import React from 'react'

function Card({ url, title, subtitle }) {
  return (

    <div className="card border border-0 px-4 px-md-2 pe-lg-5 " style={{ backgroundColor: '#1D1D2A' }}>
      <img src={url} className=" rounded-4" style={{ backgroundColor: '#1D1D2A' }} alt="..." />
      <div className="card-body h-25 text-center">
        <p className='fs-5' style={{ color: '#4A83F6' }} >{title}<br />
          <span className='text-white'>
            {subtitle}
          </span>
        </p>
      </div>
    </div>

  )
}

export default Card