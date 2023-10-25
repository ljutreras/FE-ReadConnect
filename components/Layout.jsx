import 'dotenv/config'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import LoginController from "./LoginController"
import { useEffect, useState } from "react"

const url = process.env.SERVER_URL

const Layout = ({ children }) => {

    const [isLogin, setIsLogin] = useState(null)
    const [dataLogin, setDataLogin] = useState({
        firstName: '',
        lastName: '',
        email: '',
        bookReaded: null,
        bookToRead: null
    })

    const handleSignUp = async (signUp) => {
        fetch(`https://readconnect-be.onrender.com/users/sign-up`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUp)
        }).then((response) => response.json())
            .catch((error) => {
                console.error("Error:", error)
                alert('invalid sign up')
            })
            .then((response) => {
                if (response) {
                    setDataLogin(signUp)
                    localStorage.setItem('email', signUp.email)
                    localStorage.setItem('firstName', signUp.firstName)
                    localStorage.setItem('lastName', signUp.lastName)
                    localStorage.setItem('bookReaded', null)
                    localStorage.setItem('bookToRead', null)
                    setIsLogin(true)
                    return;
                }
                console.error('invalid sign up')
            });
    }

    const handleLogin = async (login) => {
        fetch(`https://readconnect-be.onrender.com/users/sign-in`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        }).then((response) => response.json())
            .catch((error) => {
                console.error("Error:", error)
                alert('invalid login')
            })
            .then((response) => {
                if (response) {
                    setDataLogin(response)
                    localStorage.setItem('email', response.email)
                    localStorage.setItem('firstName', response.firstName)
                    localStorage.setItem('lastName', response.lastName)
                    localStorage.setItem('bookReaded', JSON.stringify(response.bookReaded))
                    localStorage.setItem('bookToRead', JSON.stringify(response.bookToRead))
                    setIsLogin(true)
                    return;
                }
                console.error('invalid login')
            });
    }

    const handleClearStorage = () => {
        localStorage.clear()
        setIsLogin(false);
    }

    useEffect(() => {
        const email = localStorage.getItem('email')
        const firstName = localStorage.getItem('firstName')
        const lastName = localStorage.getItem('lastName')
        const bookReaded = localStorage.getItem('bookReaded')
        const bookToRead = localStorage.getItem('bookToRead')
        if (email){
            setIsLogin(true)
            setDataLogin({
                firstName,
                lastName,
                email,
                bookReaded,
                bookToRead
            })
        } else{
            setIsLogin(false);
        } 
    }, [])


    return (
        <>
            {
                isLogin !== null &&
                <>
                    <Header handleClearStorage={handleClearStorage} dataLogin={dataLogin} />
                    {isLogin && <Main>
                        {children}
                    </Main>}
                    <Footer />
                    {!isLogin && <LoginController handleSignUp={handleSignUp} handleLogin={handleLogin} />}
                </>
            }
        </>
    )
}

export default Layout