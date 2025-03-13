import React from 'react'

function Card2({ url, title, subtitle }) {
  return (
    <div class="card border border-0 px-4 " style={{ backgroundColor: '#282837' }}>
      <img src={url} class=" rounded-4 w-auto  " style={{ backgroundColor: '#282837' }} height={210} alt="..." />
      <div class="card-body h-auto " style={{ backgroundColor: '#282837' }}>
        <h6 className='text-white fs-6 '  >{title}<br />
          <span className='fs-6 color-blue' style={{ color: '#4A83F6' }}>
            {subtitle}
          </span>
        </h6>
      </div>
    </div>
  )
}

export default Card2