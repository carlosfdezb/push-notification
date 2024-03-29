import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";

import { Box, IconBox } from './styles'
import {AiOutlineBell} from 'react-icons/ai'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = () => {
    const [info, setInfo] = useState([{data: null}]);
    const [test, setTest] = useState(info);
    const [change, setChange] = useState(true);
    const firebaseConfig = {
        apiKey: "AIzaSyBzfkGBB608pL1DJbXrxJVIiR7bFIJyg1k",
        authDomain: "tesisbasti.firebaseapp.com",
        databaseURL: "https://tesisbasti-default-rtdb.firebaseio.com",
        projectId: "tesisbasti",
        storageBucket: "tesisbasti.appspot.com",
        messagingSenderId: "377453846536",
        appId: "1:377453846536:web:567a5c2bbdbcd219f971bd"
      };
    const app = initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase(app));
   
  
    useEffect(() => {
        let dbRef = ref(getDatabase(app));
        get(child(dbRef, `/test/0`)).then((snapshot) => {
            if (snapshot.exists()) {
                setInfo([snapshot.val()]);
                setChange(change+1)
            } else {
                setChange(change+1)
            }
        }).catch((error) => {
            setChange(change+1)
        });
    }, [change])

    const myComponent = (data) => 
        <div style={{ marginTop: 4}}>
            <b>{data[0].title}</b>
        <p style={{ fontSize: "10px", marginTop: -1}}>
            {data[0].subtitle}
        </p>
        </div>
    ;
    
    
    useEffect(() => {
        if (JSON.stringify(test) !== JSON.stringify(info)) {
            console.log(info)
            setTest(info)
            // setChange(true)
            
                
            toast.info(myComponent(info), {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }, [info])
    

    
    return (
        
        <Box>
            <ToastContainer/>
        </Box>
    )
}
