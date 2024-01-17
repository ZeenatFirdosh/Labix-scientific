import React from 'react'
import "./Subscribe.css"
function Subscribe() {
  return (
    <section>
        <div className="container">
            <div className="row gap-4 subscribe-box mx-0">
                <div className='col-md-6'>
                    <div>
                        <div className='line1'>Subscribe To get updated</div>
                        <div className='mt-[0.5rem] line2'>Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.</div>
                    </div>
                </div>
                <div className='col-md-5 ms-auto'>
                    <div className='flex items-center justify-end gap-[0.6875rem]'>
                        <input type="email" placeholder='Enter your email' className='email placeholder:text-white flex-1 overflow-hidden'/>
                        <div type="button" className='btn-s'>Subscribe Now</div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Subscribe