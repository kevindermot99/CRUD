import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function UpdateUser() {
  const { id } = useParams()
  const [name, setName] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(result => {
        console.log(result)
        setName(result.data.name)
      })
      .catch(err => console.log(err))
  }, [])

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id, { name })
      .then(result => {
        console.log(result)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='wrapper'>
      <h1># Update User</h1>
      <Link to="/" className='link'>Cancel</Link>
      <form onSubmit={Update}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        <button className='formbtn'>Update</button>
      </form>
    </div>
  )
}

export default UpdateUser