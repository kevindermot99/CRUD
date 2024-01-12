import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { RiDeleteBin5Line } from "react-icons/ri";

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        var result = window.confirm("deleted permanently?");
        if (result) {
            axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
        }
        else {
            
        }
        
    }

    return (
        <div className='wrapper'>
            <h1>Simple CRUD Application with MERN</h1>
            <Link to="/create" className='link'>+ Add User </Link>
            <table>
                <thead>
                    <tr>
                        <th className='start'>UNIQUE ID</th>
                        <th>NAME</th>
                        <th className='end'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return <tr>
                                <td>{ user._id }</td>
                                <td>{user.name}</td>
                                <td>
                                    <Link className='actionbtn' to={`/update/${user._id}`} title='edit'>Edit</Link>
                                    <button className='actionbtn danger' onClick={(e) => handleDelete(user._id)} title='delete'><RiDeleteBin5Line /></button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users