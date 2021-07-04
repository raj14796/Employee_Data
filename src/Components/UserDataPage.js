import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../action/action'
import '../style.css'

const UserDataPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const loginData = useSelector(state => state.logData)
    const userData = useSelector(state => state.userData)
    useEffect(() => {
        if (!loginData || !loginData.loggedIn) {
            alert('Invalid Credentials')
            history.push('/');
        }
    }, [loginData, history])
    const handleLogout = () => {
        dispatch(logout())
        history.push('/')
    }
    return (
        <div>
            <h1>User Data Page</h1>
            <button onClick={() => handleLogout()}>Logout</button>
            <br /><br />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>PhoneNo</th>
                    </tr>
                </thead>

                <tbody>
                    {userData.map(aData => (
                        <tr key={aData.id}>
                            <td>{aData.id}</td>
                            <td>{aData.name}</td>
                            <td>{aData.age}</td>
                            <td>{aData.gender}</td>
                            <td>{aData.email}</td>
                            <td>{aData.phoneNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserDataPage
