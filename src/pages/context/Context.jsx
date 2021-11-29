import React, { useContext } from 'react'

const LoginContext = React.createContext()
const RegisterContext = React.createContext()


export const useContextLogin = () => {
  return useContext(LoginContext);
}

export const useContextRegister = () => {
  return useContext(RegisterContext);
}


export const AuthContext = ({children}) => {
  const [loginForm, setLoginForm] = React.useState({})
  const [registerForm, setRegisterForm] = React.useState({})
  const [isLogin, setIslogin] = React.useState(false)

  const findAccont = () => {
    if (loginForm.email === registerForm.email &&  loginForm.password  === registerForm.password ) {
      setIslogin(!isLogin);
    }
  }
  
  return (
    <RegisterContext.Provider value={{
      registerForm,
      setRegisterForm
    }}>
      <LoginContext.Provider value={{
        loginForm,
        setLoginForm
      }}>
        {children}
      </LoginContext.Provider>
    </RegisterContext.Provider>
  )
}

