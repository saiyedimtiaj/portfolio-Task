import React from 'react'
import Transition from './Transition'

function Timeline({filteredExperience,filteredEducation}) {
  return (
    <section id="timeline" className='container min-h-screen mx-auto px-3'>
        <h1 className="text-3xl md:text-5xl font-bold py-8 text-center">Timeline</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div>
            <h1 className="text-2xl md:text-4xl">Experience</h1>
            {
              filteredExperience?.map(item=><div className='flex flex-col mt-4' key={item?._id}>
                <Transition>
                <p className='h-5 ml-5 w-[2px] bg-black'></p>
                  <h5 className='text-xl md:text-2xl font-semibold '>{item?.company_name}</h5>
                  <div className='flex items-center my-1 justify-between gap-3'>
                  <p className='font-semibold text-sm'>{item?.jobTitle}</p>
                    <p className='md:text-base text-sm font-semibold'>{item?.startDate.slice(0,10)} - {item?.endDate.slice(0,10)}</p>
                  </div>
                  {
                    item?.bulletPoints?.map((i,index)=><p className='text-xs mt-1' key={index}>
                      {i}
                    </p>
                    )
                  }
                </Transition>
              </div>)
            }
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl">Education</h1>
            {
              filteredEducation?.map(item=><div className='flex flex-col mt-4' key={item?._id}>
               <Transition>
               <p className='h-5 ml-5 w-[2px] bg-black'></p>
                  <h5 className='text-xl md:text-2xl font-semibold '>{item?.company_name}</h5>
                  <div className='flex items-center my-1 justify-between gap-3'>
                    <p className='font-semibold text-sm'>{item?.jobTitle}</p>
                    <p className='md:text-base text-sm font-semibold'>{item?.startDate.slice(0,10)} - {item?.endDate.slice(0,10)}</p>
                  </div>
                  {
                    item?.bulletPoints?.map((i,index)=><p className='text-xs mt-1' key={index}>
                      {i}
                    </p>)
                  }
               </Transition>
              </div>)
            }
          </div>
        </div>
    </section>
  )
}

export default Timeline