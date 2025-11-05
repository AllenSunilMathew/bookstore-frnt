// guest user 

import commonApi from "./commonAPI"
import SERVERURL from "./serverURL"
// register APi - called by Auth component When registe button clicked, content-type:"applicatin/json"

export const registerApi = async(reqBody)=>{
  return await  commonApi("POST",`${SERVERURL}/register`,reqBody)
}
  
// login APi
export const loginApi = async(reqBody)=>{
  return await  commonApi("POST",`${SERVERURL}/login`,reqBody)
}
// google login 
export const googleLoginApi = async(reqBody)=>{
  return await  commonApi("POST",`${SERVERURL}/google-login`,reqBody)
}
  
// home page book api - call by home in useeffect
export const getHomeBookApi = async()=>{
  return await  commonApi("GET",`${SERVERURL}/home-books`)
}
// all carear api

// ------------------ autheriesd user api ------------------------------
// upload book api - called by profile component
 export const addBookApi = async(reqBody,reqHeader)=>{
  return await  commonApi("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}

// view all books


 export const getAllBooksApi = async(search,reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/all-books?search=${search}`,{},reqHeader)
}

// view single book



export const getSingleBookApi=async(bookId,reqHeader)=>{
  return await commonApi("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
}





// all user upload books
export const getUserUploadBooksAPI=async(reqHeader)=>{
  return await commonApi("GET",`${SERVERURL}/user-books`,{},reqHeader)
}

//ALL PURSHSAED BOOK

export const getAllUserBoughtBooksAPI =async(reqHeader)=>{
  return await commonApi("GET",`${SERVERURL}/user-bought-books`,{},reqHeader)
}

//remove user upload books

export const removeUserUploadBooksAPI=async(reqHeader)=>{
  return await commonApi("DELETE",`${SERVERURL}/user-books/${bookId}/remove`,{},reqHeader)
}
// profile Update  
export const updateUserProfileApi = async(reqBody,reqHeader)=>{
  return await  commonApi("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}



//list user
export const listAllUserApi = async(reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/all-user`,{},reqHeader)
}

//list books

export const getAllBooksAdminApi = async(reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}'/admin-all-books`,{},reqHeader)
}
//approve books
export const updateBookStatusApi = async(reqBody,reqHeader)=>{
  return await  commonApi("PUT",`${SERVERURL}'/admin/books/approve`,{},reqHeader,reqBody)
}


//update admin-called from admin setting when yupdate is clicked
export const updateAdminProfileApi = async(reqBody,reqHeader)=>{
  return await  commonApi("PUT",`${SERVERURL}'/admin-profile/edit`,{},reqHeader,reqBody)
}















//make payment

export const makePaymentAPi = async(reqBody,reqHeader)=>{
  return await  commonApi("PUT",`${SERVERURL}'/make-payment`,{},reqHeader,reqBody)
}