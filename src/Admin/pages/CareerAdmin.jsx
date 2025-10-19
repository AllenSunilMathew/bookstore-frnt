import React, { useState } from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faLocationDot, faXmark, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function CareerAdmin() {
  const [jobPostList, setJobPostlist] = useState(true)
  const [listApplicationStatus, setListAplicationStatus] = useState(false)
  return (
    <>

      <AdminHead />

      <>
        <div className="md:grid grid-cols-4 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          <div className='col-span-3'>
            <div className='p-10'>
              <h1 className="text-3xl text-center font-bold">All Resources</h1>
              <div className="flex justify-center items-center my-5 font-bold">
                <p onClick={() => { setJobPostlist(true); setListAplicationStatus(false) }} className={jobPostList ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Job Post </p>
                <p onClick={() => { setListAplicationStatus(true); setJobPostlist(false) }} className={listApplicationStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >View Aplicant</p>


              </div>
              {/* job box  duplicate*/}
              {jobPostList &&
                <>
                  <div className="flex my-5  md:justify-between flex-col md:flex-row  items-center">
                    <div className='flex w-full'>
                      <input type="text" className='p-2 me-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Job Title' />
                      <button className='md:px-5 px-2 md:py-2 bg-[#327E32] text-white'>Search</button>
                    </div>
                    <div className='mt-3 md:flex flex-start'>
                      <button className='md:px-5 px-3 py-2 flex  bg-blue-700 hover:bg-white border border-blue-500 hover:text-blue-500 font-bold text-white'>Add Job </button>
                    </div>
                  </div>

                  <div className='border w-full rounded shadow-2xl p-4'>
                    <div>
                      <div className='flex justify-between'>
                        <h1 className='m-3 font-bold'>job title </h1>
                        <button className='md:px-5 px-3 bg-red-700 hover:bg-black border border-red-500 hover:text-blue-500 font-bold text-white'>Delete <FontAwesomeIcon icon={faTrash} className='text-xl' /></button>
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
                </>

              }
              {listApplicationStatus &&
                <div className="p-10 overflow-x-hidden">

                  <table className='w-full my-3 shadow '>
                    <thead>
                      <tr>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Sl No</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Email</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover </th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                      </tr>
                    </thead>
                    {/* duplicate */}
                   <tbody>
                    <tr>
                      <td className='border border-gray-200 p-3 text-center'>1</td>
                      <td className='border border-gray-200 p-3 text-center'>Front-End Developer</td>
                      <td className='border border-gray-200 p-3 text-center'>John Wick</td>
                      <td className='border border-gray-200 p-3 text-center'>BMCFA</td>
                      <td className='border border-gray-200 p-3 text-center'>babayaga@gmail.com</td>
                      <td className='border border-gray-200 p-3 text-center'>99442290194</td>
                      <td className='border border-gray-200 p-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi deleniti earum atque voluptas fugit, delectus perferendis rerum dolorem vel a nisi reprehenderit! Incidunt, at quod nihil quae distinctio cumque. Aut.</td>
                      <td className='border border-gray-200 p-3 text-center'><Link className='text-blue-600 underline'>Resume</Link></td>
                    </tr>
                     </tbody>
                  </table>
                </div>

              }



            </div>
          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default CareerAdmin