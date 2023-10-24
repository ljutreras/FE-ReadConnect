import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/my-books">MY BOOKS</Link>
                </li>
                <li>
                    <Link href="/profile">PROFILE</Link>
                </li>
                <li>
                    <Link href="/sign-in">SIGN IN</Link>
                </li>
                <li>
                    <Link href="/sign-up">SIGN UP</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar