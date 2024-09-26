import React from 'react'

function Awards() {
  return (
    <>
     <div class="container p-2">
     <div className='row text-center'>
      <div className="col-lg-6">
        <img src="/public/media/img/largestBroker.svg" alt="" style={{width:'70%',}}/>
      </div>
      <div className="col-lg-6">
        <h1>Largest stock broker in India</h1>
        <p className='mt-2'>2+ million Zerodha clients contribute to over 15% of all retail order
      volumes in India daily by trading and investing in: </p>
    <div className="row mt-5">
      <div className="col-6">
      <ul>
<li>
  <p>Futures and Options</p>
</li>
<li>
  <p>Commodity derivatives</p>
</li>
<li>
  <p>Currency derivatives</p>
</li>
 </ul>
      </div>
      <div className="col-6">
      <ul>
<li>
  <p>Stock & IPOs</p>
</li>
<li>
  <p>Commodity Derivatives</p>
</li>
<li>
  <p>Bonds and Govt. securities</p>
</li>
</ul>
      </div>
      <img src="/public/media/img/pressLogos.png" alt="" className='mt-2' style={{width:"80%"}} />
    </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default Awards