import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { getHomeBookApi } from '../../services/allAPI'
function Home() {
  const [homeBooks , setHomeBooks] = useState([])
  useEffect(()=>{
     getHomeBooks()
  },[])
  console.log(homeBooks);
  
  const getHomeBooks = async()=>{
    try {
      const result = await getHomeBookApi()
      if(result.status==200){
             setHomeBooks(result.data)
      }
     
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <Header />
      {/* landing */}

      <div className="flex justify-center flex-col items-center h-screen bg-[url(/bghome.jpg)] bg-center bg-cover text-white  ">

        <div className='w-full h-screen flex justify-center flex-col items-center ' >
          <h1 className='md:text-5xl font-bold text-3xl '>WonderFull Gifts</h1>
          <p>   Give your family and friends a book   </p>

          <div className='mt-9 w-75  md:w-100 py-2 rounded-3xl ps-3 flex flex-cols px-3 justify-center items-center   bg-white'>
            <input type="text" placeholder='search Books' className='w-100 border-none outline-0  text-black me-2' />
            <button>  <FontAwesomeIcon className='text-black' icon={faMagnifyingGlass} /></button>
          </div>
        </div>
      </div>


      {/* arival */}

      <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold' >NEW ARIVALS</h1>
        <h1 className='text-3xl'>Explore Our Latest Collections</h1>

        <div className="md:grid grid-cols-4 w-full mt-5">
          { homeBooks?.length>0 ?
            homeBooks?.map((books,index)=>(<div className="p-3">
            <div key={index} className="shadow p-3 rounded mx-2 min-h-[500px]">
              <img width={'100%'} style={{ height: '300px' }} src={books?.imageUrl} alt="book" />
              <div className="flex justify-center flex-col items-center ">
                <p className="text-blue-700 font-bold text-lg">{books?.author}</p>
                <p className='my-2 text-center'>{books?.title}</p>
                <p className='my-2 text-red-400'>{books.price}</p>

              </div>
            </div>
          </div>))
            :
            <p>Loading .........</p>
            }
        </div>
        <div className="text-center my-5">
          <Link to={'/all-books'} className='bg-blue-600 p-3' >Explore More...</Link>
        </div>
      </section>

      {/* author */}
      <section className="md:grid grid-cols-2 my-5 md:px-40 p-5 gap-10">
        <div className="text-center">
          <h1 className='text-lg font-bold'>FEATURED AUTHORS</h1>
          <h2 className='text-xl'>CAPITIVATE WITH EVERY WORD</h2>
          <p className='text-justify font-bold mt-3'>   Authors in a bookstore application are the visionaries behind the books that fill the shelves, each contributing their own unique voice, creativity, and perspective to the world of literature. Whether writing fiction, non-fiction, poetry, or educational works, authors bring stories, ideas, and knowledge to life in ways that resonate with readers of all backgrounds.
       </p>
          <p className='text-justify mt-10 font-bold'>
                        Their work spans a wide array of genres, from thrilling mysteries and heartwarming romances to thought-provoking memoirs and insightful self-help books. Through their words, authors not only entertain and inform but also inspire and challenge readers to think deeply, reflect, and grow. In a bookstore application, authors' works become accessible to readers everywhere, offering a diverse and rich tapestry of voices and experiences, all of which contribute to the evolving landscape of modern literature.
                        </p>
        </div>

        <div className='md:p-10 py-2'>
          <img src="/author.png" alt="author" className='w-full h-full md:mt-0 mt-4'  />
        </div>
      </section>

      {/* testimonial */}
      <section className='md:px-40  p-5 flex flex-col justify-center items-center '>
        <h1 className='text-2xl font-bold' >TESTIMOIAL</h1>
        <h1 className='md:text-3xl text-xl font-bold'>See What Others Are Saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>
          <img src="https://tse3.mm.bing.net/th/id/OIP.ZU7Shp8D6a-JcMjrYEC7xAHaHa?pid=Api&P=0&h=180" alt="" width={'150px'} height={'150px'} style={{ borderRadius: '50%' }} />
          <h1 className='my-3 font-bold'>Teresa Joseph</h1>
          <p className='text-justify font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum repellendus aliquid quidem, sequi omnis porro rerum itaque consectetur hic corporis enim, fugiat quia amet voluptatem voluptatum ad asperiores error!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum repellendus aliquid quidem, sequi omnis porro rerum itaque consectetur hic corporis enim, fugiat quia amet voluptatem voluptatum ad asperiores error!
          </p>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Home