import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([{
        Name: 'Murengezi John'
    }])

    return (
        <div>
            <Link to="/create">Add +</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return <tr>
                                <td>1</td>
                                <td>{user.Name}</td>
                                <td><Link to="/update">Update</Link></td>
                                <td><button>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users