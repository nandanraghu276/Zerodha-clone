import React from 'react'
function Hero() {
  return (
    <div class="container p-5 mb-5">
    <div className='row text-center'>
      <img src="/public/media/img/homeHero.png" alt="" className='mb-5' style={{width:'70%', marginLeft:'17%'}} />
      <h1 className='mt-5'>Invest in everything</h1>
      <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button className='btn btn-primary p-2 fs-5 mt-4' style={{width:"20%",margin:"0 auto"}}>Sign Up for free</button>
    </div>
</div>
  )
}

export default Hero