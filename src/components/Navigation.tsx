import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='w-full flex gap-4'>
        <div className='text-xl'>Dmitriy&apos;s Website</div>
        <Link href="/">Blog</Link>
        <Link href="/cv">My CV</Link>
    </div>
  )
}

export default Navigation