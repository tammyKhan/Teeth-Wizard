import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../components/AuthProvider';

const MyAppointments = () => {
  const {user} = useContext(authContext)
  const [localSavedData, setLocalSavedData] = useState([])
  
  useEffect(() =>{
    const localData = localStorage.getItem("appointments")

    let saveData = []
   
    if(localData){
     saveData = JSON.parse(localData)
    }
   
    const userData = saveData.filter(data => data.email === user?.email)
    setLocalSavedData(userData)
   
  },[])

  return (
    <div>
      <h3>MyAppointments</h3>
      
    </div>
  );
};

export default MyAppointments;