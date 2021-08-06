import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Trash2 } from 'react-feather';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function Admin(props) {
    const [data, setData] = useState([])
    const [filteredData, setfilteredData] = useState([])
    const [name, setName] = useState('')

    useEffect(()=>{
        getList()
    },[])
    
    const getList = ()=>{
        axios.get('https://kemalrania.one/api').then(res=>{
            // console.log(res)
            setData(res.data.data.map(res=> ({...res, name: res.name.toLowerCase()}) ) )
            setfilteredData(res.data.data.map(res=> ({...res, name: res.name.toLowerCase()}) ) )
        }).catch(err=>{
            console.log(err)
        })
    }

    const handleSearch = (val)=>{
        const filtered = data.filter(res=> res.name.includes(val.toLowerCase()) )
        // console.log(filtered)
        setfilteredData(filtered)
    }

    let handleSubmit=(e)=>{
        let data ={
            "name" : name,
            "status" : 0
        } 
        axios.post('https://kemalrania.one/api', data).then(res=>{
            console.log(res)
            getList()
            setName('')
        }).catch(err=>{
            console.log(err)
        })
        e.preventDefault()
    }

    let handleDelete=(id)=>{
        // console.log(id)
        axios.delete(`https://kemalrania.one/api/${id}`).then(res=>{
            console.log(res)
            getList()
        }).catch(err=>{
            console.log(err)
            alert('gagal menghapus!')
        })
    }

    const handleLogout = ()=>{
        localStorage.clear()
        window.location.reload()
    }
    
    return (
        <div className='container admin py-5'>
            <div className='mb-3' style={{display: 'flex', justifyContent: 'space-between', alignItems : 'center'}}>
                <h1>ADMIN</h1>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
            <form onSubmit={handleSubmit} className='formSearch'>
                <div >
                    <label className="form-label">Add new guest</label>
                    <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className="form-control" name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Add Name</button>
            </form>
            <br />
            <h2>List Guest</h2>
            <div className="mb-2">
                <input type="text" placeholder='Search by name..' onChange={(e)=> handleSearch(e.target.value)} className="form-control" name='password' />
            </div>
             <Table>
                <Thead>
                    <Tr>
                    <Th>No</Th>
                    <Th>Name</Th>
                    <Th>Status</Th>
                    <Th>Note</Th>
                    <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        filteredData.map((res,i)=>(
                            <Tr key={i}>
                                <Td>{i +1}</Td>
                                <Td>{res.name}</Td>
                                <Td>
                                    <small>
                                    {res.status === '0'? 'Belum Konfirmasi' : res.status === '1' ? <b className='text-success'>Hadir <span>&#9989;</span></b> : res.status === '2' ? <i className='text-danger'>Tidak bisa hadir <span>&#10060;</span></i> : null }
                                    </small>
                                </Td>
                                <Td>{res.note}</Td>
                                <Td><button className='btn btn-danger btn-sm ' onClick={()=>handleDelete(res._id)}>Delete </button></Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </div>
    );
}

export default Admin;