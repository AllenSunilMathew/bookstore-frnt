import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full min-h-screen p-1'>
        <img src="/pnf.gif" alt=""  style={{height:'400px'}} />
        <p className='my-3'>Oh No !</p>
        <h1 className='md:text-4xl text-2xl font-bold'>Look Like You're Lost</h1>
        <p className='my-3 text-sm font-normal tracking-tighter'>The page you are looking for is not available</p>
        <Link to={'/'} className='md:px-5 px-3 py-2 bg-[#1784C8] text-white my-3 rounded' >BACK HOME  </Link>
      </div>
    </>
  )
}

export default Pnf