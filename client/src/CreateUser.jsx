import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateUser() {
    const [name, setName] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", { name })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='wrapper'>
            <h1># Create User</h1>
            <Link to="/" className='link'>Cancel</Link>
            <form onSubmit={Submit}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required />
                <button className='formbtn'>Create</button>
            </form>
        </div>
    )
}

export default CreateUser