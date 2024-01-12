import React from 'react'
import { Link } from 'react-router-dom'

function CreateUser() {
    return (
        <div>
            <Link to="/">Cancel</Link>
            <form>
                <input type="text" placeholder='Enter Name' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser