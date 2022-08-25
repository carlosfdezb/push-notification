import React, {useState} from 'react';
import {TransferList as TranList} from '../../material/transferList';
import { useParams } from 'react-router-dom';
import axios from "axios";

export const TransferList = () => {
    let { id } = useParams();
    const [dataIn, setDataIn] = useState([]);
    const [dataOut, setDataOut] = useState([]);

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/getPasos?id=${id}`).then((response) => {
            setDataIn(response.data.dataIn);
            setDataOut(response.data.dataOut);
        });
      }, id);
    
  return (
    <div style={{ marginTop: '5%'}}>
    {
        (dataIn.length > 0 || dataOut.length > 0) && <TranList id={id} dataIn={dataIn} dataOut={dataOut} setDataIn={setDataIn}/>
    }
    </div>
  )
}
