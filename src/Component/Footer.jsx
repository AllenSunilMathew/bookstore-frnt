import React from 'react'
import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <>
      <footer className=" mt-1" style={{backgroundColor:"#1E2939"}}>
      <div className=" mx-auto  pt-8">
        <div className="grid grid-cols-1 px-10 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">ABOUT US</h3>
            <p className="text-white leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Cupiditate dolorem veniam deserunt cuissuam eius ad 
              his mexime dicta ipsum nemo faque necessitatibus quas 
              nobis, illum voluptate, pariatur recusandae alias harum!
            </p>
          </div>
          
          {/* Newsletter Section */}
          <div className="col-span-1 md:px-7">
            <h3 className="text-xl font-bold mb-4 text-white">NEWSLETTER</h3>
            <p className="text-white mb-4">Stay updated with our latest trends</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email id" 
                className="px-4 py-2 border text-white border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 w-full"
              />
              <button className="bg-yellow-300 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-300 transition-colors">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          
          {/* Follow Us Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">FOLLOW US</h3>
            <p className="text-white mb-4">Let us be social</p>
            <div className="flex space-x-4 mt-5">
                <FontAwesomeIcon className='ms-2 text-white text-2xl' icon={faInstagram} />
                  <FontAwesomeIcon   className='ms-2  text-white text-2xl ' icon={faXTwitter} />
                  <FontAwesomeIcon  className='ms-2  text-white text-2xl' icon={faFacebook} />
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className=" border-gray-200 mt-8 p-3 text-center font-normal text-xs md:text-base  bg-black">
          <p className="text-white text-center">
            Copyright © 2023 All rights reserved | This website is made with by Amiya
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer