import React from 'react'
import ContinueCard from './ContinueCard'
import Image2 from "../assets/image2.png"
import Card from './Card'
import Image3 from "../assets/image3.png"
import Image4 from "../assets/image4.png"
import Rectangle6 from "../assets/Rectangle6.png"
import Rectangle7 from "../assets/Rectangle7.png"
import Card2 from './Card2'


function MyCollections() {
  return (
    <div id='main' className=' main-container px-5 pb-5 pt-0'>
      <div className=' container'>
        <div className='row '>
          <div className=' col-md-8 rounded-4 text-center p-3 mt-4' style={{ backgroundColor: '#282837' }}>
            <h3 className='text-lg-start fs-3 fw-bolder ps-4 pb-3 text-sm-center' style={{ fontSize: '29px' }} >Completed Read</h3>
            <div className='d-flex flex-wrap flex-lg-nowrap  h-auto justify-content-center align-items-center gap-3' style={{ backgroundColor: '#282837' }} >
              <Card2 url={Image2} title="Kobra Kai: Ultimate" subtitle="12 Feb 2025" />
              <Card2 url={Image2} title="Kobra Kai: Ultimate" subtitle="12 Feb 2025" />
              <Card2 url={Image2} title="Kobra Kai: Ultimate" subtitle="12 Feb 2025" />
            </div>
          </div>
          <div className='col-md-4 d-block  align-items-center text-center p-0 text-lg-end ' >

            <h3 className=" continue-text  fw-bolder " style={{ fontSize: '29px' }}  >Continue reading</h3>
            <ContinueCard text="Kobra Kai: Ultimate" progress={75} />

          </div>
        </div>
      </div>
      <div>
        <h3 className=' text-center text-md-start h-auto w-auto fw-bolder py-4' style={{ fontSize: '29px' }}>Todo Read</h3>
        <div class="container h-auto p-0">
          <div class="row h-auto p-0">
            <div class="h-auto col-sm-6 col-md-4 col-lg-3">
              <Card url={Image3} title="The Flash, Vol.1" subtitle="Joshua Williamson" />
            </div>
            <div class="h-auto col-sm-6 col-md-4 col-lg-3">
              <Card url={Image4} title="Titans, Vol.2" subtitle="Andrew Robinson" />
            </div>
            <div class="h-auto col-sm-6 col-md-4 col-lg-3">
              <Card url={Rectangle6} title="Harley Quinn, Vol.1" subtitle="Jimmy Palmiotti" />
            </div>
            <div class="h-auto col-sm-6 col-md-4 col-lg-3">
              <Card url={Rectangle7} title="Suicide Squad #8" subtitle="Tom Taylor" />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MyCollections