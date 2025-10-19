import React from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPen, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
function AdminDashbord() {
  return (
    <>

      <AdminHead />

      <>
        <div className="md:grid grid-cols-5 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
            <div className='col-span-4 p-10'>

              <div className="md:grid grid-cols-3">
                <div className="md:px-5 md:mt-0 mt-2">
                  <div className="bg-blue-900 flex text-5xl items-center p-4 rounded text-white">
                    <FontAwesomeIcon  icon={faBook}/>
                    <div className=" ms-10 md:ms-0 text-center">
                       <h3 className="text-xl">Total Number Of Books</h3>
                       <h3 className="text-4xl">100+</h3>


                    </div>
                  </div>
                </div>
                  <div className="md:px-5 md:mt-0 mt-2">
                  <div className="bg-green-900 flex text-5xl items-center p-4 rounded text-white">
                    <FontAwesomeIcon  icon={faUsers}/>
                    <div className=" ms-10 md:ms-0 text-center">
                       <h3 className="text-xl">Total Number Of Users</h3>
                       <h3 className="text-4xl">100+</h3>


                    </div>
                  </div>
                </div>
                  <div className="md:px-5 md:mt-0 mt-2">
                  <div className="bg-yellow-900 flex text-5xl items-center p-4 rounded text-white">
                    <FontAwesomeIcon  icon={faUser}/>
                    <div className=" ms-10 md:ms-0 text-center">
                       <h3 className="text-xl">Total Number Of Books</h3>
                       <h3 className="text-4xl">100+</h3>


                    </div>
                  </div>
                </div>
              </div>
              <div className="md:grid grid-cols-2 p-5 my-5">
                <div>Bar Chart</div>
                  <div>Pie Chart</div>
              </div>
            </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default AdminDashbord