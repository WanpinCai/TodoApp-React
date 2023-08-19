import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'
import { AuthProvider } from './security/AuthContext'


function LoginComponent(){

    const [username,setUsername] = useState('wanpin')

    const [password,setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage,setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(authContext.login(username,password)){

            navigate(`/welcome/${username}`)
        }else{

            setShowErrorMessage(true)
        }
    }

    return(
        <div className='Login'>
            <h1>Time to login</h1>
            {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please check your credentials.</div>}
            {/* <SuccessMessageComponent />
            <ErrorMessageComponent /> */}
            <div className="Login">
                <div className="LoginForm">
                    <div>
                        <label>User Name</label>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <div>
                        <button type="button" name="Login" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent