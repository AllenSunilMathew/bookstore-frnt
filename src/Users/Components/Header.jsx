import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [listStatus , setListStatus] = useState(false)
  const [token ,setToken] = useState("")
  const [userDp , setUserDp] = useState("")
  const [dropDownStatus ,setDropDownStatus]  = useState(false)
 const navigate = useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user =JSON.parse(sessionStorage.getItem("users"))
      setUserDp(user.profile)
     
      
    }
  },[token])
   const logout = ()=>{
    sessionStorage.clear()
    setToken("")
    setUserDp("")
    setDropDownStatus(false)
    navigate('/')
      
  }
 
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

               {!token ? 
               <Link to={'/login'}  >
                 <button className=' border border-black rounded px-3 ms-3 py-2 hover:bg-black hover:text-white'>
                    <FontAwesomeIcon className='ms-2' icon={faUser} />Login
                </button>
                </Link>
                :
                <div className='relative inline-block text-left'>
                   
                      <button type='button' onClick={()=>setDropDownStatus(!dropDownStatus)} className='w-full bg-white px-2 py-2 shadow-xs hover:bg-gray-50 '>
                        <img src={userDp == "" ? "https://cdn-icons-png.flaticon.com/512/219/219988.png" : userDp.startsWith("https://lh3.googleusercontent.com/")?userDp : "https://cdn-icons-png.flaticon.com/512/219/219988.png" } width={'40px'} height={'40px'}  style={{borderRadius:'50%'}} alt="user Dp" />
                      </button>
                      { dropDownStatus &&
                        <div className='absolute right-0 px-4 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden'>
                        <div className="py-1 ">
                          <Link className='block  py-2  text-sm text-gray-700' to={'/profile'}> <p><FontAwesomeIcon icon={faAddressCard} className='me-2' /> Profile </p></Link>
                          <button type='button' onClick={logout} ><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout </button>
                        </div>
                      </div>}
                   
                </div>
                }
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