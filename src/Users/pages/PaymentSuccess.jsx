import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
function PaymentSuccess() {
  return (
    <div>
      <Header/>

<div className='container my-10'>
<div className='md:grid grid-cols-2 px-20 justify-center items-center'>
<div>
    <h1 className='md:text-4xl text-blue-600'>Congratulations!!!!!!</h1>
    <p className='text-2xl my-4'> Thanks for ur Purchase!!!!!!</p>
<Link to={'/allbooks'} className='bg-blue-400'><FontAwesomeIcon icon={faBackward}></FontAwesomeIcon> Explore More Books!!!</Link>

</div>
<div>
    <div className='flex justify-center item-center'>
        <img className='img-fluid' src="https://i.pinimg.com/originals/90/13/f7/9013f7b5eb6db0f41f4fd51d989491e7.gif
" alt="success gif" />
    </div>
</div>
</div>
    </div>   
    
    
    
    
     </div>
  )
}

export default PaymentSuccess

