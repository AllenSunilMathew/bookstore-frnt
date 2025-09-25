import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
      <Header />

      <div className="md:mx-40 p-5">
        <h1 className="text-center my-3 font-bold text-2xl">Contact</h1>
        <p className="md:text-center text-justify text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus
          consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum
          assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex, ratione
          aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!
        </p>

        {/* contact info */}
        <div className="flex justify-between flex-col md:flex-row gap-6 my-6">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              className='text-3xl p-3 bg-[#D9D9D9] me-2' style={{ borderRadius: '50%', width: '30px', height: '30px' }}
            />
            <p>
              123 Main Street, Apt 4B, <br /> Anytown, CA 91234
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faPhone}
              className='text-3xl p-3 bg-[#D9D9D9] me-2' style={{ borderRadius: '50%', width: '30px', height: '30px' }}
            />
            <p>+91 9874561230</p>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-3xl p-3 bg-[#D9D9D9] me-2' style={{ borderRadius: '50%', width: '30px', height: '30px' }}
            />
            <p>Bookstore@gmail.com</p>
          </div>
        </div>

        {/* map and form section */}
        <div className="md:grid grid-cols-2 gap-20 my-7 md:p-10">
          {/* form */}
          <div className="bg-[#D9D9D9] p-4 rounded w-full h-full">
            <form action="">
              <h1 className="text-center text-black font-bold my-3">Send Me Message</h1>
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-2 my-2 w-full bg-white rounded"
              />
              <input
                type="email"
                placeholder="Email Id"
                className="px-3 py-2 my-2 w-full bg-white rounded"
              />
              <textarea
                placeholder="Message"
                className="my-2 w-full h-32 px-3 py-2 bg-white rounded"
              ></textarea>
              <button className="flex items-center justify-center gap-2 text-white px-3 py-2 my-2 bg-black w-full rounded">
                Send <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>

          {/* map */}
          <div className="md:mt-0 my-2 md:h-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720463!2d76.30948095113635!3d10.008813464705796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1758723893967!5m2!1sen!2sin"
              loading="lazy"
              className="w-full h-full rounded"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact