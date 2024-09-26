import React from 'react'

function Pricing() {
  return (
    <>
     <div class="container mt-5">
     <div className='row '>
      <div className="col-5 ">
        <h1>Unbeatable pricing</h1>
        <p className='mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a href="" style={{textDecoration:'none'}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="col-7 ">
         <div className='row'>
          <div className="col-3 position-relative">
            <img src="/public/media/img/pricing.svg" alt=""  style={{width:'150%'}}/>
            <h6 style={{position:'absolute', left:'100%', top:"55%", fontSize:'60%'}}>Free account
            opening</h6>
          </div>
          <div className="col-3 position-relative ms-lg-5">
          <img src="/public/media/img/pricing.svg" alt=""  style={{width:'150%'}}/>
            <h6 style={{position:'absolute', left:'100%', top:"55%", fontSize:'60%'}}>Free equity delivery
            and direct mutual funds</h6>
          </div>
          <div className="col-4 ms-lg-5  position-relative">
          <img src="/public/media/img/pricing20.svg" alt=""  style={{width:'90%'}}/>
            <h6 style={{position:'absolute', left:'80%', top:"40%", fontSize:'60%'}}>Intraday and
            F&O</h6>
          </div>
         </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default Pricing