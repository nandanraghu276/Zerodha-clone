import React from 'react'

function Hero() {
  return (
    <>
    <div className="container mt-5 ">
      <h1 className=' text-center fs-1'style={{opacity:'.7', marginTop:'120px'}}>We pioneered the discount broking model in India. <br/>
      Now, we are breaking ground with our technology.</h1>
      <div className="line " style={{width:'100%', border:'1px solid', opacity:'0.1', marginTop:'100px'}}></div>
       <div className="row mt-lg-5">
          <div className="col-4 mt-lg-5" style={{marginLeft:'80px',fontSize:'16px'}}>
            <p className=''>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
            <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
            <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
          </div>
          <div className="col-4 mt-lg-5" style={{marginLeft:'80px',fontSize:'16px'}}>
            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p><a href="" style={{textDecoration:'none'}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="" style={{textDecoration:'none'}}>blog</a> or see what the media is <a href="" style={{textDecoration:'none'}}>saying about us</a>.
</p>
          </div>
       </div>
    </div>

    </>
  )
}

export default Hero