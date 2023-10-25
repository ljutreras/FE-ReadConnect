import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = ({ dataLogin, handleClearStorage }) => {

    const [modal, setModal] = useState(false)

    const onHandleClearStorage = () => {
        setModal(false)
        handleClearStorage()
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/my-books">MY-BOOKS</Link>
                </li>
                <li>
                    <Link href="/to-read">TO-READ</Link>
                </li>
            </ul>
            <div onClick={() => setModal(true)} role='button' className='navDataLogin'>
                {
                    dataLogin.firstName.charAt(0).toUpperCase()
                }
            </div>
            {
                modal &&
                <div onClick={() => setModal(false)} role='button' className="navLoginWindows">
                    <div onClick={(e) => e.stopPropagation()} role='button' className="navLoginCard">
                        <div className="navLoginCardTitle">
                            {dataLogin.firstName} {dataLogin.lastName}
                        </div>
                        <div className="navLoginCardText">
                            <p>{dataLogin.email}</p>
                            <Link href='/my-books' passHref>
                                <button className='btnSmall fullWith'>Books readed</button>
                            </Link>
                            <Link href={'/to-read'} passHref>
                                <button className='btnSmall fullWith'>Books to read</button>
                            </Link>
                        </div>
                        <div className="navLoginCardAction">
                            <button className='btnSmall' onClick={(_) => onHandleClearStorage()}>Log out</button>
                        </div>
                    </div>
                </div>
            }
        </nav>
    )
}

export default NavBar