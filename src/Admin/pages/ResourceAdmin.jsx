import React, { useEffect, useState } from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
import SERVERURL from '../../services/serverURL'
import { getAllBooksAdminApi, listAllUserApi, updateBookStatusApi } from '../../services/allAPI'

function ResourceAdmin() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [userListStatus, setUserListStatus] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const [userBooks, setUserBooks] = useState([])
  console.log(userBooks);
  const [updateBookStatus, setUpdateBookStatus] = useState([])




  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      if (bookListStatus) {
        getAllBooks(token)
      } else if (userListStatus) {
        getAllUsers(token)
      } else {
        console.log("Something went wrong")
      }
    }
  }, [ userListStatus, updateBookStatus])

  const getAllUsers = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await listAllUserApi(reqHeader)
      if (result.status === 200) {
        setAllUsers(result.data)
      } else {
        console.log(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllBooksAdminApi(reqHeader)
      if (result.status === 200) {
        setUserBooks(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const approveBooks = async (book) => {
    const userToken = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await updateBookStatusApi(book, reqHeader)
      if (result.status == 200) {
        setUpdateBookStatus(result.data)
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
      <AdminHead />
      <div className="md:grid grid-cols-4">
        <div className='col-span-1'>
          <AdminSideBar />
        </div>

        <div className='col-span-3'>
          <div className='p-10'>
            <h1 className="text-3xl text-center font-bold">All Resources</h1>

            <div className="flex justify-center items-center my-5 font-bold">
              <p
                onClick={() => { setBookListStatus(true); setUserListStatus(false) }}
                className={bookListStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}
              >
                Sell Book
              </p>

              <p
                onClick={() => { setUserListStatus(true); setBookListStatus(false) }}
                className={userListStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}
              >
                Book Status
              </p>
            </div>

            {/* Book List Section */}
            {bookListStatus && (
              <div className="md:grid grid-cols-4 w-full mt-5">
                {userBooks?.length > 0 ? (
                  userBooks.map((item, index) => (
                    <div key={index} className="p-3">
                      <div style={{ height: '500px' }} className="shadow p-3 rounded mx-2">
                        <img width={'100%'} style={{ height: '300px' }} src={item?.imageUrl} alt="book" />
                        <div className="flex justify-center flex-col items-center ">
                          <p className="text-blue-700 font-bold text-lg">{item?.author}</p>
                          <p className='my-3'>{item?.title.slice(0, 20)}</p>
                          <p className='text-red-400'>${item?.price}</p>

                          {
                            book?.status == "pending" &&
                            <button onClick={approveBooks(book)} className="w-full bg-green-700 text-black px-4 py-2 hover:bg-green-500 my-3"> Approved</button>
                          }
                          {
                            book?.status == "approved " &&
                            <div className="flex justify-end w-full">
                              <img width={'40px'} height={'40px'} src="data:image/png;base64,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" alt="" />
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-3">Loading...</div>
                )}
              </div>
            )}

            {/* User List Section */}
            {userListStatus && (
              <div className="md:grid grid-cols-3 w-full mt-5">
                {allUsers?.length > 0 ? (
                  allUsers.map((user, index) => (
                    <div key={index} className="p-3">
                      <div className="shadow p-3 bg-gray-100 rounded mx-2">
                        <p className="text-red-700 font-bold text-sm">ID: {user?._id}</p>
                        <div className='flex justify-around mt-3'>
                          <img
                            width={'50px'}
                            style={{ height: '50px', borderRadius: '50%' }}
                            src={user?.profile ? `${SERVERURL}/uploads/${user.profile}` : "https://wallpaperaccess.com/full/1209397.jpg"}
                            alt="profile"
                          />
                          <div className="flex justify-center flex-col items-center">
                            <p className='text-blue-800'>{user?.username}</p>
                            <p>${user?.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-3">No users found</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ResourceAdmin
