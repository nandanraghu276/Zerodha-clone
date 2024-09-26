import React from 'react'

function Stats() {
  return (
    <>
     <div class="container p-2 mt-5">
     <div className='row  mt-5' >
      <div className="col-6">
        <h1>Trust with confidence</h1>
        <h4 className='mt-5 '>Customer-first always</h4>
        <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
        <h4 className='mt-5 '>No spam or gimmicks</h4>
        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
        <h4 className='mt-5 '>The Zerodha universe</h4>
        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        <h4 className='mt-5 '>Do better with money</h4>
        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
      </div>  
      <div className="col-6">
        <img src="/public/media/img/ecosystem.png" alt="" style={{width:'90%'}}/>
        <div className='mt-3 ms-lg-5'>
          <a href=""style={{textDecoration:'none', }} className=''>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
          <a href="" style={{textDecoration:'none'}} className='ms-lg-5'>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <img src="/public/media/img/pressLogos.png" alt="" style={{width:'50%', marginLeft:'30%',}} className=""  />
      </div>
     </div>
    </>
  )
}

export default Stats