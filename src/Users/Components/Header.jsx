import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [listStatus , setListStatus] = useState(false)
  return (
    <>

      <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className='flex items-center w-100'>
          <img src="/logo1.png" alt="logo" width={'51px'} height={'47px'} />
          <h1 className="text-2xl font-bold ms-2 md:hidden w-100">Book Store</h1>
        </div>

        {/* title */}

        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>Book Store  </h1>
        </div>

        {/* login */}

        <div className='md:flex justify-end items-center hidden'>
          <FontAwesomeIcon className='ms-2' icon={faInstagram} />
          <FontAwesomeIcon className='ms-2' icon={faXTwitter} />
          <FontAwesomeIcon className='ms-2' icon={faFacebook} />

          {/* login link */}

                <Link to={'/login'}  >
                 <button className=' border border-black rounded px-3 ms-3 py-2 hover:bg-black hover:text-white'>
                    <FontAwesomeIcon className='ms-2' icon={faUser} />Login
                </button>
                </Link>
        </div>


      </div>

      <nav className='w-full p-3 text-white bg-black'>
        {/* menu bar and login */}
                  <div className="flex justify-between items-center md:hidden">
                    <button onClick={()=>setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} /></button>


                     <Link to={'/login'}  >

                 <button className=' border border-white rounded px-3 ms-3 py-2 hover:bg-black hover:text-white'>
                    <FontAwesomeIcon className='ms-2' icon={faUser} />Login
                </button>
                </Link>
                  </div>


        <ul className={listStatus? "flex flex-col":'md:flex justify-center items-center hidden'} >
         <li  className=' md:mx-4 mt-3 md:mt-0 text-white' >  <Link to={'/'} >HOME</Link></li>
           <li  className=' md:mx-4 mt-3 md:mt-0 text-white'><Link to={'/all-books'}>BOOKS</Link></li>
           <li  className='md:mx-4 mt-3 md:mt-0 text-white'> <Link to={'/careers'}  >CAREERS</Link></li>
            <li  className='md:mx-4 mt-3 md:mt-0 text-white'> <Link to={'/contact'}  >CONTACT</Link></li>
        </ul>
      </nav>
    

    </>
  )
}

export default Header