import React, {useState} from 'react'
import signup from '../signup'
const signup = () => {
    const [data, setData] = useState({
        firstName     : "" , 
        lastName      : "" , 
        emailId       : "" , 
        contactNumber : "" , 
        password      : "" , 
        roleId        : ""   
    });
  return (
    <>
      <signup/>
    </>
 
  )
}

export default signup
