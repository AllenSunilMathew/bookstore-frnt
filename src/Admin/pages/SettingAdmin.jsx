import React from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function SettingAdmin() {
  return (
    <>

      <AdminHead />

      <>
        <div className="md:grid grid-cols-4 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          <div className='col-span-3'>
            <h1 className='text-center my-10 text-2xl font-bold'>Settings</h1>
            <div className='md:grid grid-cols-2 md:px-15 md:p-10 gap-10 mx-4'>
              {/* content lorem  */}
              <div className=''>
                <p className='text-justify my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?</p>
                <p className='text-justify my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?</p>
              </div>
              {/* form link */}


              <div className='bg-[#DBEAFE] md:px-10 md:py-5 p-3 rounded '>

                <div className='flex items-center relative  flex-col '>
                  <label htmlFor="adminpic" className=''>
                    <img className='border ' src='https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180' alt='user admin logo' style={{width:'100px', height:'100px', borderRadius:'50%'}} />
                    <FontAwesomeIcon icon={faPen} className='bg-yellow-400 p-1 text-white rounded absolute bottom-0 ml-17'/>
                  </label>
                  <input type="file" id='adminpic' name='' className='hidden ' />
                 
                </div>
                 <p className='my-2 text-center'>User Name</p>
                <form>
                  <input type="text" placeholder='User Name' className='px-3 py-2 my-2 w-full bg-white rounded' />

                  <input type="password" placeholder='Password' className='px-3 py-2 my-2 w-full bg-white rounded' />
                  <input type="password" placeholder='Confirm Password' className='px-3 py-2 my-2 w-full bg-white rounded' />

                </form>

                <div className='flex justify-between my-5'>
                  <button className='md:px-18 md:py-4 px-9 py-2 mr-2 rounded bg-[#FFB834] text-white'>Reset</button>
                  <button className='md:px-18 px-9 py-2 rounded bg-[#327E32] text-white'>Update</button>
                </div>

              </div>
            </div>
          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default SettingAdmin