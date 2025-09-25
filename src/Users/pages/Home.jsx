import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <Header />
      {/* landing */}
      
        <div className="flex justify-center flex-col items-center h-screen bg-[url(/bghome.jpg)] bg-center bg-cover text-white  ">
          
         <div  className='w-full h-screen flex justify-center flex-col items-center ' >
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
                      <div className="p-3">
                        <div className="shadow p-3 rounded mx-2">
                          <img  width={'100%'}  style={{height:'300px'}} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                          <div className="flex justify-center flex-col items-center ">
                            <p className="text-blue-700 font-bold text-lg">Author</p>
                             <p >Book Title</p>
                             <p>$ 400</p>

                          </div>
                        </div>
                      </div>
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
            <p className='text-justify font-bold mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nemo nulla commodi quaerat nisi, obcaecati reprehenderit totam quod mollitia error enim tempore, cupiditate esse officiis rerum cumque quidem assumenda magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe voluptatibus odit commodi enim, eligendi, nam nihil, magnam sequi ipsam adipisci iure aliquid a? Nam necessitatibus explicabo obcaecati deleniti nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta minima voluptatum maiores error, sed alias saepe iusto eos, odio necessitatibus adipisci laboriosam laudantium vel illum inventore ipsam deserunt eveniet in.</p>
              <p className='text-justify mt-3 font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nemo nulla commodi quaerat nisi, obcaecati reprehenderit totam quod mollitia error enim tempore, cupiditate esse officiis rerum cumque quidem assumenda magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe voluptatibus odit commodi enim, eligendi, nam nihil, magnam sequi ipsam adipisci iure aliquid a? Nam necessitatibus explicabo obcaecati deleniti nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta minima voluptatum maiores error, sed alias saepe iusto eos, odio necessitatibus adipisci laboriosam laudantium vel illum inventore ipsam deserunt eveniet in.</p>
              
          </div>

         <div className='p-5'>
           <img src="https://tse3.mm.bing.net/th/id/OIP.ZU7Shp8D6a-JcMjrYEC7xAHaHa?pid=Api&P=0&h=180" alt="author" className='w-90 '  style={{height:'600px'}} />
           </div>
  </section>

      {/* testimonial */}
              <section className='md:px-40  p-5 flex flex-col justify-center items-center '>
                <h1 className='text-2xl font-bold' >TESTIMOIAL</h1>
                     <h1 className='text-3xl'>See What Others Are Saying</h1>
                     <div className='my-5 flex flex-col justify-center items-center'>
                        <img src="https://tse3.mm.bing.net/th/id/OIP.ZU7Shp8D6a-JcMjrYEC7xAHaHa?pid=Api&P=0&h=180" alt="" width={'150px'} height={'150px'} style={{borderRadius:'50%'}}  />
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