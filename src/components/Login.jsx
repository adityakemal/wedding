import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let handleSubmit = (e)=>{
        let user ={
            email : 'kadityafikar@gmail.com',
            password : 'secret123'
        }
        let promise = new Promise((resolve, rej)=>{
            if(email === user.email && password === user.password){
                localStorage.setItem('auth', true)
                localStorage.setItem('token', 'token12345')
                resolve('berhasil')
            }
            rej('error')
            
        })
        promise.then(res=>{
            window.location.href='/admin'
            console.log(res)
        }).catch(err=>{
            console.log(err)
            alert('email / password salah!')
        })
        e.preventDefault()
    }   
    const token = localStorage.getItem('token')

    return (
        <div className='login container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" name='email'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" name='password' />
                </div>
                
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>
    ) 
}

export default Login;