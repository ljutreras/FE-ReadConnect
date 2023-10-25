import React, { useState } from 'react'

const LoginController = ({handleSignUp, handleLogin}) => {

    const [signUp, setSignUp] = useState(false);
    const [formSignUp, setFormSignUp] = useState({firstName: '',lastName: '',email: '',password: ''});
    const [formLogin, setFormLogin] = useState({email: '',password: ''});

    const handleChangeSignUp = (e) => {
        setFormSignUp({...formSignUp, [e.target.name]: e.target.value})
    }

    const handleChangeLogin= (e) => {
        setFormLogin({...formLogin, [e.target.name]: e.target.value})
    }

    const handleSubmitSignUp = (e) => {
        e.preventDefault()
        handleSignUp(formSignUp)
    }
    const handleSubmitLogin= (e) => {
        e.preventDefault()
        handleLogin(formLogin)
    }

    return (
        <div className='contentLoginController'>
            {
                signUp ? <div className='loginController'>
                    <div className='cardLogin'>
                        <div className="cardTitleLogin">
                            Sign Up to Read Connect!
                        </div>
                        <div className="cardFormLogin">
                            <form onSubmit={(e) => handleSubmitSignUp(e)}>
                                <input onChange={(e)=> handleChangeSignUp(e)} className='w100' name='firstName' value={formSignUp.firstName} type="text" placeholder="First Name" />
                                <input onChange={(e)=> handleChangeSignUp(e)} className='w100' name='lastName' value={formSignUp.lastName} type="text" placeholder="Last Name" />
                                <input onChange={(e)=> handleChangeSignUp(e)} className='w100' name='email' type="email" value={formSignUp.email} placeholder="Email Address" />
                                <input onChange={(e)=> handleChangeSignUp(e)} className='w100' name='password' type="password" value={formSignUp.password} placeholder="Password" />
                                <button type="submit"><span>Sign Up</span></button>
                            </form>
                        </div>
                        <div className="cardActionLogin">
                            <button onClick={() => setSignUp(false)}>Login</button>
                        </div>
                    </div>
                </div> : <div className='loginController'>
                    <div className='cardLogin'>
                        <div className="cardTitleLogin">
                            Welcome to Read Connect!
                        </div>
                        <div className="cardFormLogin">
                            <form onSubmit={(e) => handleSubmitLogin(e)}>
                                <input onChange={(e)=> handleChangeLogin(e)} className='w100' name='email' value={formLogin.email} type="email" placeholder='ex@example.com' />
                                <input onChange={(e)=> handleChangeLogin(e)} className='w100' name='password' value={formLogin.password} type="password" placeholder='password' />
                                <button type='submit'>Login</button>
                            </form>
                        </div>
                        <div className="cardActionLogin">
                            <p>Are you not registered?</p>
                            <button onClick={() => setSignUp(true)}> Sign Up</button>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default LoginController