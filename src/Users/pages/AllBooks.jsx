import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function AllBooks() {
    const [listStatus , setListStatus] = useState(false)
  return (
    <>
   <Header/>
      <>
         <div className="flex justify-center items-center flex-col my-5">
          <h1 className="text-3xl font-bold">Collections</h1>
          <div className="flex my-5 justify-center  w-full p-3 ">
            <input type="text" className='p-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Search by Title'/>
            <button className='px-5 bg-blue-400'>Search</button>
          </div>
         </div>

         {/* grid */}

         <div className="md:grid grid-cols-4 p-5 md:px-20">
          <div className="col-span-1">
            <div className='flex justify-between mb-8 md:mb-0'>
              <h1 className="text-2xl font-semibold">Filter</h1>
               <button onClick={()=>setListStatus(!listStatus)} className='text-2xl md:hidden' ><FontAwesomeIcon icon={faBars} /></button>
              </div>
           
           <div className={listStatus ? 'block my-3 md:my-0':'md:block hidden '}>
             <div className="mt-3">
                <input type="radio" id='Literary' name='filter' className='me-2' />
                <label htmlFor="Literary">Literary Fiction</label>
              </div>  
              <div className="mt-3">
                <input type="radio" id='Philosophy' name='filter' className='me-2' />
                <label htmlFor="Philosophy">Philosophy</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Romance' name='filter' className='me-2' />
                <label htmlFor="Romance">Romance</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Mystery/Thriller' name='filter' className='me-2' />
                <label htmlFor="Mystery/Thriller">Mystery/Thriller</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Horror' name='filter' className='me-2' />
                <label htmlFor="Horror">Horror</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Auto/Biography' name='filter' className='me-2' />
                <label htmlFor="Auto/Biography">Auto/Biography</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Self-Help' name='filter' className='me-2' />
                <label htmlFor="Self-Help">Self-Help</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Politics' name='filter' className='me-2' />
                <label htmlFor="Politics">Politics</label>
              </div>
           </div>
          </div>
          <div className="col-span-3">
            <div className="md:grid grid-cols-4">
              <div className="shadow p-3 rounded mx-2">
              <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
              <div className="flex justify-center flex-col items-center ">
                <p className="text-blue-700 font-bold text-lg">Author</p>
                <p >Book Title</p>
                <p>$ 400</p>
                <Link to={'/books/:id/view'} className='px-5 py-3 bg-blue-400 my-3' >View...</Link>

              </div>
            </div>
             <div className="shadow p-3 rounded mx-2">
              <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
              <div className="flex justify-center flex-col items-center ">
                <p className="text-blue-700 font-bold text-lg">Author</p>
                <p >Book Title</p>
                <p>$ 400</p>
                 <Link to={'/books/:id/view'} className='px-5 py-3 bg-blue-400 my-3' >View...</Link>

              </div>
            </div>
             <div className="shadow p-3 rounded mx-2">
              <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
              <div className="flex justify-center flex-col items-center ">
                <p className="text-blue-700 font-bold text-lg">Author</p>
                <p >Book Title</p>
                <p>$ 400</p>
                 <Link to={'/books/:id/view'} className='px-5 py-3 bg-blue-400 my-3' >View...</Link>

              </div>
            </div>
             <div className="shadow p-3 rounded mx-2">
              <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
              <div className="flex justify-center flex-col items-center ">
                <p className="text-blue-700 font-bold text-lg">Author</p>
                <p >Book Title</p>
                <p>$ 400</p>
                 <Link to={'/books/:id/view'} className='px-5 py-3 bg-blue-400 my-3' >View...</Link>

              </div>
            </div>
              
            </div>
          </div>
         </div>
      
      
      </>




      <Footer/>
    
    </>
  )
}

export default AllBooks