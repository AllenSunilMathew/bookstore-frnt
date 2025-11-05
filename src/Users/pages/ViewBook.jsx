import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { getSingleBookApi, makePaymentAPi } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'
import { loadStripe } from '@stripe/stripe-js';
function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false)
  const { id } = useParams()
  const [book, setBook] = useState({})

  console.log(book);
  useEffect(() => {
    viewBookDetails()
  }, [])
  const handlePayment = async () => {
    console.log("Inside handle Payment");

    const stripe = await loadStripe('pk_test_51SPbiRIkXq1EceRAF4hBtZCDnrPQCsCeu7C2lZNjhIfmAgwVNEAeS5z4TT7P9DUEOmAAS4PqqCsRyi04w7w8sHRi00Ytx4TQhU');
    console.log(stripe);
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await makePaymentAPi(book, reqHeader)
        console.log(result);
        const checkoutSessionURL= result.data.checkoutSessionURL
        if(checkoutSessionURL){
          window.location.href=checkoutSessionURL
        }

      } catch (error) {
        console.log(error);

      }
    }

  }

  const viewBookDetails = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getSingleBookApi(id, reqHeader)
        if (result.status == 200) {
          setBook(result.data)
        } else if (result.response.status == 400) {
          toast.warning(result.response.data)
        } else {
          console.log(result);

        }
      } catch (error) {
        console.log(error);

      }
    }

  }
  return (
    <>
      <Header />

      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4">
            <div className="col-span-1">
              <img src={book?.imageUrl} alt="book" />
            </div>
            <div className="col-span-3 p-5">

              <div className="flex justify-between ">
                <h1 className="text-xl font-bold">{book?.title}</h1>
                <button onClick={() => setModalStatus(true)}><FontAwesomeIcon icon={faEye} /></button>

              </div>
              <p>{book?.author}</p>
              <div className='md:grid grid-cols-3 gap-5 my-10  '>

                <p className='font-bold'>Publisher : {book?.publisher}  </p>
                <p className='font-bold'>Language : {book?.language}</p>
                <p className='font-bold'>No. of pages : {book?.noOfPages}</p>
                <p className='font-bold'> Seller Mail :{book?.userMail}     </p>
                <p className='font-bold'> Real Price: ${book?.price}</p>
                <p className='font-bold'>ISBN : {book?.isbn}</p>
                <p className='font-bold'>Category: {book?.category}</p>

              </div>
              <div className="md:my-10 my-4">
                <p className='font-bols text-lg'>
                  {book?.abstract}
                </p>
              </div>
              <div className='flex justify-end'>
                <button className='bg-blue-900 text-white p-2 rounded'><Link to={'/all-books'} ><FontAwesomeIcon icon={faBackward} className='me-3' />Back</Link></button>
                <button onClick={handlePayment} className='bg-green-900 text-white p-2 ms-5 rounded'>Buy ${book?.discountPrice}</button>
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
                  <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} />
                </div>
                <div className='ml-5 my-5 '>
                  <p className=' text-blue-600'>
                    <FontAwesomeIcon icon={faCamera} />
                    Camera Click Of the  in the hand of seller
                  </p>
                  <div>
                    {
                      book?.uploadImg?.length > 0
                        ? book.uploadImg.map((img) => (
                          <img
                            key={img} // always good to add a key when mapping
                            width="250px"
                            height="250px"
                            className="mx-2 md:mb-0 mb-2"
                            src={`${SERVERURL}/uploads/${img}`}
                            alt="book images"
                          />
                        ))
                        : <p>No books are uploaded by the seller</p>
                    }
                  </div>

                  <div className="md:flex flex-wrap   my-4">
                    <img width={'250px'} height={'250px'} src="/book.jpg" alt="" className='mx-2 my-2' />
                    <img width={'250px'} height={'250px'} src="/book.jpg" alt="" className='mx-2 my-2' />
                    <img width={'250px'} height={'250px'} src="/book.jpg" alt="" className='mx-2 my-2' />

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      }
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

export default ViewBook