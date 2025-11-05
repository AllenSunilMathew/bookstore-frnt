import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addBookApi, getAllUserBoughtBooksAPI, getUserUploadBooksAPI, removeUserUploadBooksAPI } from '../../services/allAPI'
// import edit from '../Components/Edit'

import Edit from '../Components/Edit'
import { userUpdateContext } from '../../../contextAPI/ContextShare'
import SERVERURL from '../../services/serverURL'
userUpdateContext
function Profile() {

  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "",
    publisher: "", language: "", isbn: "", category: "", uploadImg: []
  })
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])
  const [token, setToken] = useState("")
  const [purchaseBook, setPurchaseBooks] = useState([])   // ✅ fixed here
  const [userBooks, setUserBooks] = useState([])
  const [deleteBookStatus, setDeleteBookStatus] = useState(false)
  const [userDP, setUserDP] = useState("")
  const [username, setUserName] = useState("")

  const { userEditResponse } = useContext(userUpdateContext)

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setToken(sessionStorage.getItem('token'))
      const user = JSON.parse(sessionStorage.getItem("user"))
      if (user?.hasOwnProperty("username")) {
        setUserName(user.username)
        setUserDP(user.Profile)
      }
    }
  }, [userEditResponse])

  useEffect(() => {
    if (bookStatus === true) {
      getAllUserBooks()
    } else if (purchaseStatus === true) {
      getAllUserBoughtBooks()
    }
  }, [bookStatus, deleteBookStatus, purchaseStatus])

  const getAllUserBooks = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getUserUploadBooksAPI(reqHeader)
      if (result.status === 200) {
        setUserBooks(result.data)
      } else {
        console.log(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeBook = async (bookId) => {
    const reqHeader = { "Authorization": `Bearer ${token}` }
    try {
      const result = await removeUserUploadBooksAPI(bookId, reqHeader)
      if (result.status === 200) {
        toast.success(result.data)
        setDeleteBookStatus(true)
      } else {
        console.log(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAllUserBoughtBooks = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserBoughtBooksAPI(reqHeader)
      if (result.status === 200) {
        setPurchaseBooks(result.data)
      } else {
        console.log(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // ✅ Keep all these inside component
  const handleUploadImage = (e) => {
    const fileArray = [...bookDetails.uploadImg, e.target.files[0]]
    const url = URL.createObjectURL(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadImg: fileArray })
    setPreview(url)
    setPreviewList([...previewList, url])
  }

  const handleReset = () => {
    setBookDetails({
      title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "",
      publisher: "", language: "", isbn: "", category: "", uploadImg: []
    })
    setPreview("")
    setPreviewList([])
  }

  const handleBookSubmit = async () => {
    const { title, author, noOfPages, imageUrl, price, discountPrice, abstract, publisher, language, isbn, category, uploadImg } = bookDetails
    if (!title || !author || !noOfPages || !imageUrl || !price || !discountPrice || !abstract || !publisher || !language || !isbn || !category || uploadImg.length === 0) {
      toast.info("Please Fill The Form")
    } else {
      const reqHeader = { "Authorization": `Bearer ${token}` }
      const reqBody = new FormData()
      for (let key in bookDetails) {
        if (key !== 'uploadImg') {
          reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadImg.forEach(img => reqBody.append("uploadImg", img))
        }
      }
      try {
        const result = await addBookApi(reqBody, reqHeader)
        if (result.status === 401) {
          toast.warning(result.response.data)
        } else if (result.status === 200) {
          toast.success("Book Added Successfully!")
          handleReset()
        } else {
          toast.error("Something went wrong!")
          handleReset()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // ✅ Finally your return
  return (
    <>
      <Header />
      <>
        <div className="bg-black" style={{ height: '200px' }} > </div> 
        <div className="bg-white p-3" style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }}>
           <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={userDP== ""?"https://cdn-icons-png.flaticon.com/512/219/219988.png": userDP.startsWith("https://lh3.googleusercontent.com/")?userDP : `${SERVERURL}/uploads/${userDP}`}alt="profic picture" />
        </div> <div className="md:flex px-20 justify-between mt-5">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-xl text-black-700 ">{username}</h1>
            <FontAwesomeIcon className='text-blue-400 ml-3' icon={faCircleCheck} />
          </div>
          {/* <div>Edit</div> */}
          <Edit />
        </div>
        <div className="md:px-20 px-5 my-5 text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia fuga officiis cum. Eaque, molestias corporis doloribus quae recusandae harum quos officia dolores quisquam maxime explicabo sunt ratione sit amet! Consequatur saepe, recusandae ullam expedita vero nesciunt nisi qui eveniet odio animi, consequuntur laborum delectus officia perferendis, doloribus neque cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia fuga officiis cum. Eaque, molestias corporis doloribus quae recusandae harum quos officia dolores quisquam maxime explicabo sunt ratione sit amet! Consequatur saepe, recusandae ullam expedita vero nesciunt nisi qui eveniet odio animi, consequuntur laborum delectus officia perferendis, doloribus neque cumque! lorem100
        </div>
        <div className="md:px-40">
          <div className="flex justify-center items-center my-5 font-bold">
            <p onClick={() => { setSellBookStatus(true); setBookStatus(false); setPurchaseStatus(false) }} className={sellBookStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Sell Book </p>
            <p onClick={() => { setBookStatus(true); setSellBookStatus(false); setPurchaseStatus(false) }} className={bookStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Book Status</p>
            <p onClick={() => { setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }} className={purchaseStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Purchase History</p>
          </div>
          {/* sell Books */}
          {sellBookStatus &&
            <div className='bg-gray-200 p-10 my-20 mx-5'>
              <div className="text-center text-3xl font-medium">Book Details </div>
              <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className='px-3'>
                  <div className="mb-3 px-3">
                    <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder="Title" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className="mb-3 px-3">
                    <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder="Author" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" /> </div>
                  <div className="mb-3 px-3"> <input value={bookDetails.noOfPages} onChange={e => setBookDetails({ ...bookDetails, noOfPages: e.target.value })} type="text" placeholder="No of Pages" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className="mb-3 px-3"> <input value={bookDetails.imageUrl} onChange={e => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} type="text" placeholder="Image Url" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className="mb-3 px-3"> <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder="Price" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className="mb-3 px-3"> <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder="Discount Price" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className='mb-3 px-3'> <textarea value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} placeholder="Abstarct" className="px-3 py-2 my-2 w-full border mx-2 h-25 border-gray-400 placeholder-gray-400 bg-white rounded" ></textarea>
                  </div>
                </div>
                <div className="px-3">
                  <div className="mb-3 px-3">
                    <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder="Publisher" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className="mb-3 px-3">
                    <input value={bookDetails.language} onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder="Language" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className="mb-3 px-3"> <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder="ISBN" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className="mb-3 px-3"> <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder="Category" className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded" />
                  </div>
                  <div className="mb-3 px-3 flex justify-center items-center"> <label htmlFor="upload" > {!preview ? <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" /> : <img style={{ width: '200px', height: '200px' }} src={preview} alt="book" />} </label>
                    <input id='upload' onChange={(e) => handileUpLoadImage(e)} type="file" className="hidden" />
                  </div>
                  {preview && <div className=" flex justify-center items-center">
                    {previewList?.map(imgUrl => (<img src={imgUrl} alt="books" width={'70px'} height={'70px'} className='mx-3' />))}
                    {previewList.length < 3 && <label htmlFor="upload" > <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500' /> </label>}
                    <input id='upload' onChange={(e) => handileUpLoadImage(e)} type="file" className="hidden" />
                  </div>
                  }
                </div>
              </div>
              <div className=' p-2 w-full flex justify-end'>
                <button type='button' onClick={handleReset} className="py-2 px-3 rounded bg-black text-white">Reset</button>
                <button type='button' onClick={handleBookSubmit} className="py-2 px-3 rounded mx-2 bg-blue-600 text-white">Submit</button>
              </div>
            </div>
          }
          {/*Book Status */}
          {bookStatus &&
            <div className="p-10 my-20 shadow rounded">
              {/* duplicate div according to book */}
              {
                userBooks?.length > 0 ? userBooks?.map((item, index) => {
                  <div className="p-5 rounded mt-4 bg-gray-100"> <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4"> <div className="text-2xl">{item?.title}
                    </div>
                      <h2 className="text-xl">{item?.author}</h2>
                      <h3 className="text-lg text-blue-500">{item?.discountPrice}</h3>

                      <p className="text-justify"> {item?.abstract} </p>
                      <div className="flex mt-3 items-center"> {item?.status == "pending" ? <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://tse4.mm.bing.net/th/id/OIP.dxFEodSiLPxvk6UQAkhf0wHaGa?pid=Api&P=0&h=180"
                        alt="pending icon" /> : item?.status == "approved" ?
                        <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://www.mercedescano.com/wp-content/uploads/2019/03/Approved.jpg"
                          alt="approved icon" className='mx-2' />
                        :
                        <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="data:image/png;base64,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"
                          alt="sold icon" className='mx-2' />}
                      </div>
                    </div>
                    <div className='px-4 w-full mt-4 md:mt-0'>
                      <img src={item?.imageUrl} alt="book" />
                      <div className="mt-4 flex justify-end">
                        <button onClick={() => removeBook(item?._id)} className="py-2 px-3 rounded border border-red-400 text-red-500 hover:bg-red-500 hover:text-black">Delete</button>
                      </div>
                    </div>
                  </div>
                  </div>
                })
                  :
                  <div className='flex justify-center items-center flex-col'>
                    <img width={'45%'} height={'200px'} src="data:image/jpeg;base64,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" alt="no book" />
                    <div className='font-bold text-xl '>Book not uploaded yet!!!</div>
                  </div >
              } </div>
          }
          {purchaseStatus &&
            <div className="p-10 my-20 shadow rounded">
              {/* duplicate div according to book */}
              <div className="p-5 rounded mt-4 bg-gray-100">
                <div className="md:grid grid-cols-[3fr_1fr]">
                  <div className="px-4">
                    <div className="text-2xl">Book Title</div>
                    <h2 className="text-xl">Author</h2>
                    <h3 className="text-lg text-blue-500">$300</h3>
                    <p className="text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo accusamus eius molestiae, vitae accusantium consequatur quas nisi natus. Earum ullam praesentium necessitatibus, corporis incidunt deleniti assumenda mollitia ipsum quas. </p>
                    <div className="flex mt-3 items-center">
                      <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://www.pngmart.com/files/7/Sold-PNG-Photo.png" alt="pending icon" />
                    </div>
                  </div>
                  <div className='px-4 w-full mt-4 md:mt-0'>
                    <img src="/book.jpg" alt="book" />
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Profile
