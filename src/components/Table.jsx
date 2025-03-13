import React from 'react'

function Table() {
  return (
    <div className='h-auto w-100 ms-0 table-responsive'><table class="table align-middle  table-borderless " style={{ backgroundColor: '#1D1D2A' }}>
    
    <tbody style={{ backgroundColor: '#1D1D2A' }}>
      <tr style={{ backgroundColor: '#1D1D2A' }}>
        <th scope="row" className='fw-bold fs-4 ps-0 text-start text-white' style={{ backgroundColor: '#1D1D2A' }}>Chapter1</th>
        <td className='fw-normal fs-4 text-white ps-0 text-start' style={{ backgroundColor: '#1D1D2A' }}>the life is shorting!!</td>
        <td className="fw-normal fs-4  ps-0 text-start" style={{ backgroundColor: '#1D1D2A',color:"#4A83F6" }}>23 JAN 2025</td>
        <td className="fw-normal fs-4 ps-0 text-start" style={{ backgroundColor: '#1D1D2A',color:'#7DEF0B' }}>Complete</td>
      </tr>
      <tr>
        <th className='fw-bold fs-4  ps-0 text-white *
        
        
        text-start' scope="row" style={{ backgroundColor: '#1D1D2A' }}>Chapter2</th>
        <td className='fw-normal fs-4 ps-0 text-white text-start' style={{ backgroundColor: '#1D1D2A' }}>the life is shorting!!</td>
        <td className="fw-normal fs-4  ps-0 text-start " style={{ backgroundColor: '#1D1D2A',color:"#4A83F6" }}>24 JAN 2025</td>
        <td className="fw-normal fs-4  ps-0 text-start"style={{ backgroundColor: '#1D1D2A',color:'#FFC70E' }}>Pending</td>
      </tr>
      <tr>
        <th className='fw-bold fs-4 ps-0 text-white text-start' scope="row" style={{ backgroundColor: '#1D1D2A' }}>Chapter3</th>
        <td className='fw-normal fs-4 ps-0 text-white text-start' style={{ backgroundColor: '#1D1D2A' }}>the life is shorting!!</td>
        <td className="fw-normal fs-4  ps-0 text-start" style={{ backgroundColor: '#1D1D2A',color:"#4A83F6" }}>25 JAN 2025</td>
        <td className="fw-normal fs-4  ps-0 text-start " style={{ backgroundColor: '#1D1D2A' ,color:'#FFC70E'}}>Pending</td>
      </tr>
      <tr>
        <th className='fw-bold ps-0 fs-4 text-white text-start' scope="row" style={{ backgroundColor: '#1D1D2A' }}>Chapter4</th>
        <td className='fw-normal ps-0 fs-4 text-white text-start' style={{ backgroundColor: '#1D1D2A' }}>the life is shorting!!</td>
        <td className="fw-normal fs-4  ps-0 text-start" style={{ backgroundColor: '#1D1D2A',color:"#4A83F6" }}>26 JAN 2025</td>
        <td className="fw-normal fs-4 ps-0 text-start" style={{ backgroundColor: '#1D1D2A' ,color:'#FFC70E'}}>Pending</td>
      </tr>
    </tbody>
  </table></div>
  )
}

export default Table