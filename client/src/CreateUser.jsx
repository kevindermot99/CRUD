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
        <div>
            <Link to="/">Cancel</Link>
            <form onSubmit={Submit}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser