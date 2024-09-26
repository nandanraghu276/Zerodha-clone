import React from 'react'

function NoteFound() {
  return (
    <>
     <div className="container mt-5">
        <div className="row">
            <div className="col-6 mt-5">
            <div className="mt-5 text-center">
         <h1 className='mt-5'> Kiaan couldn’t find that page</h1>
         <p className='mt-5'>We couldn’t find the page you were looking for. Visit Zerodha’s home page.</p>
       </div>
            </div>
            <div className="col-6">
                <img src="/public/media/img/kiaan404.jpg" alt="" />
            </div>
       </div>
     </div>
    </>
  )
}

export default NoteFound