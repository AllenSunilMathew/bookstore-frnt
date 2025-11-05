import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { getAllBooksApi } from '../../services/allAPI'
import { searchBookContext } from '../../../contextAPI/ContextShare'

function AllBooks() {

  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [books, setBooks] = useState([])
  const[allCategory,setAllCategory]=useState([])
  const [tempBooks, setTempBooks] = useState([])
  const {searchKey, setSearchKey} = useContext(searchBookContext)

  console.log(allCategory)
  console.log(searchKey);
  

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  }, [searchKey])

  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllBooksApi(searchKey,reqHeader)
      if (result.status === 200) {
        setBooks(result.data)
        setTempBooks(result.data)
        const tempCategory = result.data.map(item => item.category)
        console.log(tempCategory);
        
        const tempArray = [...new Set(tempCategory)]
        setAllCategory(tempArray)




      } else {
        console.log(result)
        toast.warning(result.response?.data)
      }
    } catch (err) {
      console.log(err)
      toast.error("Failed to load books")
    }
  }

  // Filter according to book category
  const filterBooks = (category) => {
    if (category === "No-Filter") {
      setBooks(tempBooks)
    } else {
      setBooks(tempBooks?.filter(item => item.category?.toLowerCase() === category.toLowerCase()))
    }
  }

  return (
    <>
      <Header />
      {token ? (
        <>
          <div className="flex justify-center flex-col my-5 items-center">
            <h1 className="text-3xl">Collections</h1>
            <div className="flex my-5">
              <input
                type="text" value={searchKey}
                className="p-2 rounded border border-gray-400 md:w-100 text-black placeholder-gray-700"
                placeholder="Search by Title" onChange={(e)=>setSearchKey(e.target.value)}
              />
              <button className="bg-blue-400 ms-2 rounded w-15 md:w-20" >Search</button>
            </div>
          </div>

          {/* grid */}
          <div className="md:grid grid-cols-4 md:px-20 p-5">
            {/* filter */}
            <div className="col-span-1">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Filters</h1>
                <button
                  onClick={() => setListStatus(!listStatus)}
                  className="text-2xl md:hidden"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              <div className={listStatus ? "block" : "md:block hidden"}>
                <div className="mt-3">
                  <input type="radio" id="literary1" name="filter" onClick={() => filterBooks("Literary Fiction")} />
                  <label className="ms-3" htmlFor="literary1">Literary Fiction</label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="philosophy" name="filter" onClick={() => filterBooks("Philosophy")} />
                  <label className="ms-3" htmlFor="philosophy">Philosophy</label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="romance" name="filter" onClick={() => filterBooks("Romance")} />
                  <label className="ms-3" htmlFor="romance">Romance</label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="mystery" name="filter" onClick={() => filterBooks("Mystery/Thriller")} />
                  <label className="ms-3" htmlFor="mystery">Mystery/Thriller</label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="horror" name="filter" onClick={() => filterBooks("Horror")} />
                  <label className="ms-3" htmlFor="horror">Horror</label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="bio" name="filter" onClick={() => filterBooks("bio")} />
                  <label className="ms-3" htmlFor="bio">Auto Biography</label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="selfhelp" name="filter" onClick={() => filterBooks("Self Help")} />
                  <label className="ms-3" htmlFor="selfhelp">Self Help</label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="politics" name="filter" onClick={() => filterBooks("Politics")} />
                  <label className="ms-3" htmlFor="politics">Politics</label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="nofilter" name="filter" onClick={() => filterBooks("No-Filter")} />
                  <label className="ms-3" htmlFor="nofilter">No Filter</label>
                </div>
              </div>
            </div>

            {/* {book} */}
            <div className='col-span-3'>
              <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
                {
                  books.length > 0 ?
                    books?.map(book => (
                      <div key={book?._id} className='shadow p-3 rounded mx-2 'hidden={book?.status=='pending'|| book?.status =='sold'}>
                        <img width={'100%'} style={{ height: '300px' }} src={book?.imageUrl} alt="" />
                        <div className='flex justify-center flex-col items-center'>
                          <p className='text-blue-400 text-lg'>{book?.author}</p>
                          <p>{book?.title.slice(0, 20)}</p>
                          <p>{book?.discountPrice}</p>
                          <Link to={`/books/${book?._id}/view`} className='px-5 py-3 bg-blue-600 text-white rounded my-3'>View More</Link>
                        </div>
                      </div>
                    ))
                    :
                    <p>No Books !!!</p>
                }
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='my-10 flex justify-center items-center flex-col min-h-100vh'>
          <img className='w-75' src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="lock" />
          <p className='font-semibold text-xl'>
            Please <Link to={'/login'} className='text-blue-700 font-bold underline'>Login</Link> To Explore More.....
          </p>
        </div>
      )}

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default AllBooks
