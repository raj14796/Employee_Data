import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, setUserData } from '../action/action'

const LoginPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState({ username: '', password: '' })

    useEffect(() => {
        dispatch(setUserData())
    }, [dispatch])

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
        
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData.username, formData.password));
        history.push('/userData')
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='email'
                    placeholder='Username'
                    name='username'
                    value={formData.username}
                    onChange={(e) => handleInputChange(e)}
                />
                <br />
                <br />
                <input type='password'
                    placeholder='Password'
                    name='password'
                    value={formData.password}
                    onChange={(e) => handleInputChange(e)}
                />
                <br />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
