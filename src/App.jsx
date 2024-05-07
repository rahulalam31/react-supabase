import React, {useState, useEffect} from 'react'
import {supabase} from './createClient'
import './App.css'

const App = () => {

    const [users, setUsers] = useState([])

    
    console.log(users);
    useEffect(() => {
        fetchUsers()
    }, [])
    async function fetchUsers(){
        const {data} = await supabase.from('users').select('*')
        setUsers(data)
    console.log(users);
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) =>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr> )}
            </tbody>
        </table>
    </div>
  )
}

export default App