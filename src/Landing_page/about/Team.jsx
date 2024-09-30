import React from 'react'

function Team() {
  return (
    <>
      <div className="container mt-5 ">
        <h1 className=' text-center fs-1' style={{ opacity: '.7', marginTop: '120px' }}>People</h1>
        <div className="row mt-5">
          <div className="col-6 text-center">
            <img src="/public/media/img/techno.jpg" alt="" style={{width:'50%',}} className='rounded-circle mx-'/>
           <span><h3 className='mt-2'>Raghunandan Saraswat</h3></span>
            <p>Founder, CEO</p>
          </div>
          <div className='col-5 '>
              <p>Raghunandan bootstrapped and founded Vkr Group in 2023 to overcome the hurdles he faced during his decade long stint as a web developer. Today, Vkr Group has changed the landscape of the Indian It tech Company.</p>
              <p className='mt-lg-4 '>he is founding team in the IT sector and focusing on technology solutions and digital transformation </p>
              <p> he Playing Cricket for (Rsis)</p>
              <a href="" style={{textDecoration:'none'}}>Connect on Homepage / It tech / Twitter</a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 text-center">
          <img src="/public/media/img/Kau_c-removebg-preview.png" alt="" style={{width:'70%',}} className='rounded-circle mx-'/>
           <span><h3 className='mt-2'>Kaushal Chaudhary</h3></span>
            <p>Co Founder& CFO</p>
          </div>
          <div className="col-4 text-center">
          <img src="/public/media/img/Vivek_-removebg-preview.png" alt="" style={{width:'70%',}} className='rounded-circle mx-3'/>
           <span><h3 className='mt-2'>Vivek Singh</h3></span>
            <p>CTO</p>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  )
}


export default Team;