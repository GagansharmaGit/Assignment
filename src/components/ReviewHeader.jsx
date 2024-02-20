import React from 'react'

const ReviewHeader = ({reviewer_name}) => {
  return (
    <div className=' '>
      <div className='pr-2  flex justify-between'>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 16c-4.418 0-8-1.79-8-4v-2c0-2.21 3.582-4 8-4s8 1.79 8 4v2c0 2.21-3.582 4-8 4z"/>
              </svg>
              <div className='flex gap-1 font-bold pl-2'>
                <div>{reviewer_name} <span className='font-light'>write a review at</span> tripadvisor.com</div>

              </div>
            </div>
        
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-2 10h4v-2h-4V8h-2v4H6v2h4v4h2v-4z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path d="M16 2H8c-1.1 0-1.99.9-1.99 2L6 20l6-4 6 4V4c0-1.1-.9-2-2-2zm-4 11l-4 2.67V4h8v11.67L12 13z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </svg>


          </div>


        </div>
    </div>
  )
}

export default ReviewHeader