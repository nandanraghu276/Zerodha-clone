import React from 'react'

function Education() {
  return (
    <>
     <div class="container mt-5">
     <div className='row mt-5'>
      <div className="col-6 ">
        <img src="/public/media/img/education.svg" alt=""  style={{width:'80%'}}/>
      </div>
      <div className="col-6 mt-5">
        <h2>Free and open market education</h2>
        <p className='mt-lg-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a href="https://zerodha.com/varsity/" style={{textDecoration:'none'}}>Varsity<i class="fa-solid fa-arrow-right ms-2"></i></a>
        <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a href="https://zerodha.com/varsity/" style={{textDecoration:'none'}}>TradingQ&A<i class="fa-solid fa-arrow-right ms-2"></i></a>
      </div>
      </div>
      </div>
    </>
  )
}

export default Education