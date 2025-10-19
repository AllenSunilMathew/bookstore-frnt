import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />

      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4">
            <div className="col-span-1">
              <img src="/book.jpg" alt="book" />
            </div>
            <div className="col-span-3 p-5">

              <div className="flex justify-between ">
                <h1 className="text-xl font-bold">Title</h1>
                <button onClick={() => setModalStatus(true)}><FontAwesomeIcon icon={faEye} /></button>

              </div>
              <p>Author</p>
              <div className='md:grid grid-cols-3 gap-5 my-10  '>

                <p className='font-bold'>Publisher : Penguin Life  </p>
                <p className='font-bold'>Language : English</p>
                <p className='font-bold'>No. of pages : 208</p>
                <p className='font-bold'> Seller Mail : maxwell@gmail.com     </p>
                <p className='font-bold'> Real : $ 15</p>
                <p className='font-bold'>ISBN : 978-0143130727</p>

              </div>
              <div className="md:my-10 my-4">
                <p className='font-bols text-lg'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero voluptas aliquid labore id libero quos dolores recusandae ex quaerat, quidem in quo saepe iste placeat inventore modi! Sequi, repudiandae!
                </p>
              </div>
              <div className='flex justify-end'>
                <button className='bg-blue-900 text-white p-2 rounded'><Link to={'/all-books'} ><FontAwesomeIcon icon={faBackward} className='me-3' />Back</Link></button>
                <button className='bg-green-900 text-white p-2 ms-5 rounded'>Buy $123</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* modal */}

      {
       modalStatus && 
        <div className="relative z-10" onClick={() => setModalStatus(false)} >
        <div className='bg-gray-500/75 fixed inset-0 transition-opacity' >
                <div className="flex justify-center items-center md:min-h-screen p-4">
                     <div className='bg-white rounded-2xl '  >
                        <div className='bg-black text-white p-3 flex justify-between w-full'>
                          <h3>Books Images</h3>
                          <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)}/>
                        </div>
                        <div className='ml-5 my-5 '>
                          <p className=' text-blue-600'>
                            <FontAwesomeIcon icon={faCamera} />
                            Camera Click Of the  in the hand of seller
                          </p>
                          <div className="md:flex flex-wrap   my-4">
                          <img  width={'250px'} height={'250px'} src="/book.jpg" alt="" className='mx-2 my-2' />
                           <img width={'250px'} height={'250px'}src="/book.jpg" alt="" className='mx-2 my-2' />
                            <img  width={'250px'} height={'250px'} src="/book.jpg" alt="" className='mx-2 my-2' />
                             
                        </div>
                        </div>
                        
                     </div>
                </div>
        </div>
      </div>

      }
      <Footer />

    </>
  )
}

export default ViewBook