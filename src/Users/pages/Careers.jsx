import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Careers() {
  return (
    <>
      <Header />

      <>
        <div className="md:mx-30 p-5">
          <div className='p-5 '>
            <h1 className="text-center my-3 font-bold text-2xl">Careers</h1>
            <p className="md:text-center text-justify text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex,ratione  aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!


            </p>
          </div>
          <p className='text-start font-bold'>current Oppening</p>
          <div className="flex my-5  justify-center">
            <input type="text" className='p-2 me-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Job Title' />
            <button className='px-5  bg-[#327E32] text-white'>Search</button>
          </div>
          {/* job box */}
          <div className='border w-full rounded shadow-2xl p-4'>
            <div>
              <div className='flex justify-between'>
                <h1 className='m-3 font-bold'>job title </h1>
                <button className='md:px-5 px-3 bg-blue-700 text-white'>Apply <FontAwesomeIcon icon={faSquareUpRight} className='text-xl' /></button>
              </div>
              <div className='px-5 pe-29'> <hr className='my-3 ' /></div>

              <div>
                <p className='my-3'> <FontAwesomeIcon icon={faLocationDot} className='text-blue-400 ' /> Location</p>
                <p className='my-3'>  Job Type: Senior Level</p>

                 <p className='my-3'> Salary: 10 lakhs</p>

                 <p className='my-3'> Qualification: M-Tech /B-Tech/BCA/MCA</p>

                  <p className='my-3'>Experience: 5-7</p>

                 <p className='my-3 text-justify'> Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                
              </div>
            </div>



          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default Careers