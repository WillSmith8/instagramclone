import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
      {/* {Left} */}
      <div className='flex items-center justify-between max-w-6xl'>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src='https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png'
            layout='fill'
            className='object-contain'
          />
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'
            layout='fill'
            className='object-contain'
          />
        </div>
        <h1>Right side</h1>
      </div>

      {/* {Middle} */}

      {/* {Right} */}
    </div>
  )
}
