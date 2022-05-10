import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";

import { Box, IconBox } from './styles'
import {AiOutlineBell} from 'react-icons/ai'
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';

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
   
    get(child(dbRef, `/test/0`)).then((snapshot) => {
        if (snapshot.exists()) {
            setInfo([snapshot.val()]);
        } else {
            console.log("No hay notificaciones");
        }
    }).catch((error) => {
            console.error(error);
    });

    useEffect(() => {
        if (JSON.stringify(test) !== JSON.stringify(info)) {
            setTest(info)
            setChange(true)
            setTimeout(() => {
                setChange(false)
            }, 3000);
        }
    }, [info])
    

    
    return (
        <Box change={change}>
            {
                change ? 
                <>
                    <IconBox change={change}>
                        <AiOutlineBell size={32} />
                    </IconBox>
                    <h4>{ test ? test.map((d) => d.data) : ''}</h4>
                </> :
                <IconBox change={change}>
                    <AiOutlineBell size={32} />
                </IconBox>

            }
        </Box>
    )
}
