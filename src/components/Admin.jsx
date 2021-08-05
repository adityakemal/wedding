import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Admin(props) {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://kemalrania.one/api').then(res=>{
            // console.log(res)
            setData(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    
    return (
        <div className='container'>
            <h1>ADMIN</h1>
            {
                data.map((res,i)=>(
                    <div key={i}>
                    <p>Nama : {res.name}</p>
                    <p>status : {res.status}</p>
                    <p>Note : {res.note}</p>
                    <br />
                    </div>
                ))
            }
        </div>
    );
}

export default Admin;