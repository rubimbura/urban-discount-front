import AuthContainer from "../authContainer"
import './index.scss'
import TextField from '../../components/textFiled'
import PrimaryButton from '../../components/button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleUsername = () => {

  }

  const handlePasswordChange = () => {

  }

  const handleSubmit = () => {
    navigate('/orders')
  }

  return(
    <AuthContainer>
      <div className="login-container">
        <div className="login-text">Login to your account </div>
        <TextField 
          label="username" 
          type="text" 
          onChange={handleUsername}
          value=''
        />
        <TextField 
          label="password" 
          type="password" 
          onChange={handlePasswordChange}
          value=''
        />
        <br/>
        <br/>
        <br/>
        <PrimaryButton 
          label="submit"
          onClick={handleSubmit}
        />
      </div>
    </AuthContainer>
  )
}
export default Login