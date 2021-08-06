import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { X } from 'react-feather';

function Confirmation(props) {

    const [data, setData] = useState([])
    const [filteredData, setfilteredData] = useState([])
    const [guest, setGuest] = useState({})
    const [status, setStatus] = useState('')
    const [note, setNote] = useState('')
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState('')

    
    useEffect(()=>{
        getList()
    },[])

    const searchRef = useRef(null);
    
    const getList = ()=>{
        axios.get('https://kemalrania.one/api').then(res=>{
            // console.log(res)
            setData(res.data.data.map(res=> ({...res, name: res.name.toLowerCase()}) ) )
            // setfilteredData(res.data.data.map(res=> ({...res, name: res.name.toLowerCase()}) ) )
        }).catch(err=>{
            console.log(err)
        })
    }

    const handleSearch = (val)=>{
        if (val.length > 2) {
            const filtered = data.filter(res=> res.name.includes(val.toLowerCase()) )
            // console.log(filtered)
            setfilteredData(filtered)
        }else{
            setfilteredData([])
        }
    }

    let handleModal = ()=>{
        setModal(!modal)
        if (modal === true) {
            searchRef.current.focus()
        }
    }

    let handleSubmit = (e)=>{
        let data = {
            // id : guest._id,
            name : guest.name,
            status,
            note
        }
        axios.patch(`https://kemalrania.one/api/${guest._id}`, data).then(res=>{
            // console.log(res)
            alert('berhasil konfirmasi kehadiran')
            // setfilteredData(res.data.data.map(res=> ({...res, name: res.name.toLowerCase()}) ) )
        }).catch(err=>{
            console.log(err)
            alert('gagal konfirmasi kehadiran')
        })
        e.preventDefault()
    }
    return (
        <div className='confirmation container' id='confirmation'>
            <h1 className='mb-5'>Konfirmasi kehadiran</h1>
            <div className="row">
                <div className="col-md-4 ">
                    <h4>
                    Silahkan cari nama anda dan konfirmasi kehadirannya, terimakasih <span >&#128578;</span>
                    </h4>
                </div>
                <div className="col-md-7">
                    <form onSubmit={handleSubmit} id='formStat'>
                        <div className="mb-2">
                            <label htmlFor="name">Nama</label>
                            <input id='name' placeholder='Cari nama anda' className="form-select mb-2" onFocus={handleModal}  readOnly  value={guest.name} required />
                            {
                                modal?
                                <div className="searchmodal ">
                                    <div className="col-md-5 col-sm-12 box container">
                                            <div className="close"  onClick={handleModal}><X  size={30}/></div>
                                            <label>Cari nama anda</label>
                                            <input id='name' ref={searchRef} className="form-control mb-2 " placeholder='Masukan minimal 3 karakter ' onChange={(e)=> handleSearch(e.target.value) } required/>
                                            <ul>
                                                {
                                                    filteredData.map((res,i)=>(
                                                        <li key={i} onClick={()=>{
                                                             setGuest(res)
                                                             handleModal()
                                                            }}>{res.name}</li>
                                                    ))
                                                }
                                            </ul>
                                            {/* <button onChange={handleSearch} disabled={filter.length < 3} className='btn-large btn-warning btn' form='formSearch'>Search</button> */}
                                    </div>
                                </div>
                                 : null
                            }
                        </div>
                        <div className="mb-2">
                            <label htmlFor="status">Status kehadiran</label>
                            <select id='status' className="form-select" onChange={(e)=>setStatus(e.target.value)} value={status} required>
                                <option className='text-secondary' value="" >- Pilih status kehadiran -</option>
                                <option value="1">Ya, saya akan hadir &#9989;</option>
                                <option value="2">Maaf, tidak bisa hadir &#128591;</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="note">Catatan</label>
                            <textarea onChange={(e)=> setNote(e.target.value)} className="form-control"  id='note' placeholder='Ucapkan sesuatu :)' id="" cols="10" rows="6"></textarea>
                        </div>
                        <button form='formStat' className='btn btn-lg btn-success w-100' type="submit">Konfirmasi</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;