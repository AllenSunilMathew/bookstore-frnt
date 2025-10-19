
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function AdminHead() {

  return (
    <>

          <div className="flex items-center justify-between p-3 md:px-10">
        {/* Logo + Title */}
        <div className="flex items-center">
          <img src="/logo1.png" alt="logo" width={51} height={47} />
          <h1 className="md:text-2xl  font-bold ml-2">Book Store</h1>
        </div>
  
        {/* Logout Button */}
        <div>
          <Link to="/login">
            <button className="border border-black rounded md:px-3 px-2 ml-3 py-2 hover:bg-black hover:text-white flex items-center">
              <FontAwesomeIcon icon={faPowerOff} className='mr-2' />
              Logout
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-black  px-2 md:py-2'>
        <marquee   className='text-sm text-white tracking-tighter text-center ' >Welcome,  Admin! You're all set to manage and monitor the system. Let’s get to work!</marquee>
      </div>
       



    </>
  )
}

export default AdminHead