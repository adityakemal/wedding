import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Trash2 } from 'react-feather';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Swal from 'sweetalert2'


import {
    // EmailShareButton,
    // FacebookShareButton,
    // HatenaShareButton,
    // InstapaperShareButton,
    // LineShareButton,
    // LinkedinShareButton,
    // LivejournalShareButton,
    // MailruShareButton,
    // OKShareButton,
    // PinterestShareButton,
    // PocketShareButton,
    // RedditShareButton,
    // TelegramShareButton,
    // TumblrShareButton,
    // TwitterShareButton,
    // ViberShareButton,
    // VKShareButton,
    WhatsappShareButton,
    WhatsappIcon
    // WorkplaceShareButton
  } from "react-share";

function Admin(props) {
    const [data, setData] = useState([])
    const [filteredData, setfilteredData] = useState([])
    const [name, setName] = useState('')

    useEffect(()=>{
        getList()
    },[])
    
    const getList = ()=>{
        axios.get('https://kemalrania.one/api').then(res=>{
            console.log(res)
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
            Swal.fire({
                icon: 'success',
                title: 'Berhasil menambahkan tamu',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch(err=>{
            console.log(err)
        })
        e.preventDefault()
    }

    let handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://kemalrania.one/api/${id}`).then(res=>{
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  getList()
              }).catch(err=>{
                  console.log(err)
                  Swal.fire(
                    'Delete Failed!',
                    'Your file is not deleted!',
                    'error'
                  )
              })
            }
          })
        // console.log(id)
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
            <h2>Guest list</h2>
            <div className="mb-2">
                <input type="text" placeholder='Search by name..' onChange={(e)=> handleSearch(e.target.value)} className="form-control" name='password' />
            </div>
             <Table>
                <Thead>
                    <Tr>
                    <Th>No</Th>
                    <Th>Name</Th>
                    <Th>Status</Th>
                    <Th>Notes</Th>
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
                                <Td style={{display : 'flex', justifyContent: 'space-evenly'}}>
                                    <button className='btn btn-danger btn-sm ' onClick={()=>handleDelete(res._id)}>Delete </button>
                                    <WhatsappShareButton title={`To, ${res.name.toUpperCase()}`} url={`https://kemalrania.one/for/${res._id}`}>
                                        <button className='btn btn-success btn-sm '>
                                        Share <WhatsappIcon size={20} round={true}/>
                                        </button>
                                    </WhatsappShareButton>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </div>
    );
}

export default Admin;