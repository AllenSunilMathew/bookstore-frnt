import React, { createContext, useState } from 'react'
export const searchBookContext = createContext("")
export const userUpdateContext = createContext("")



function ContextShare({ children }) {
    const [searchKey, setSearchKey] = useState("")
    const [userEditResponse, setUserEditResponse] = useState([])
    return (
        <div>
            <searchBookContext.Provider value={{ searchKey, setSearchKey }}>

                <userUpdateContext.Provider value={{ userEditResponse, setUserEditResponse }}>
                    {children}
                </userUpdateContext.Provider>
            </searchBookContext.Provider>
        </div>
    )
}

export default ContextShare
