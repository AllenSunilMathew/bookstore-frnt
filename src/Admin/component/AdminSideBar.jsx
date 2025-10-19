
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faBagShopping, faBars, faBook, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons'

function AdminSideBar() {
  const [listStatus, setListStatus] = useState(false)
  return (
    <>

      <div className='  w-full h-full '>
        <nav className='w-full md:p-20 flex items-center p-4 justify-between md:block flex-col h-full  text-black bg-[#EFF6FF] ' >
          {/* menu bar and login */}

          <div className='flex md:items-center  flex-col '>
            <img className='border ' src='https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180' alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <p className='my-2'>User Name</p>
          </div>
          <div className="flex justify-between items-center md:hidden">
            <button onClick={() => setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} /></button>
          </div>



          <ul className={listStatus ? "flex flex-col" : 'md:flex flex-col justify-center  hidden'} >
            <li className='my-3'>

              <Link to={'/admin-dashbord'} > <FontAwesomeIcon icon={faBook} className='mx-2' /> HOME </Link>
            </li>
            <li className='my-3'>

              <Link to={'/admin-resource'}> <FontAwesomeIcon icon={faBook} className='mx-2' />   Resources</Link>
            </li>
              <li className='my-3'>
              <Link to={'/admin-career'}  > <FontAwesomeIcon icon={faScrewdriverWrench} className='mx-2' /> CAREERS</Link>
            </li>
           
            <li className='my-3'>
              <Link to={'/admin-settings'}  > <FontAwesomeIcon icon={faScrewdriverWrench} className='mx-2' /> Settings</Link>
            </li>

          </ul>
        </nav>
      </div>

    </>
  )
}

export default AdminSideBar