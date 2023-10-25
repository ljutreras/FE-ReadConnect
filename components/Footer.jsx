import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <div>
                        <h3>About Read Connect</h3>
                        <p className='aboutFooter'>Read Connect is a platform where you will find the best evaluated books, it is a place to connect the world with paper to create a feeling</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    Copyright 2023 Read Connect Company. All rights reserved.
                </div>
                <div>
                    Designed by <Link href={'https://www.linkedin.com/in/leonardo-utreras/'}>Leonardo Utreras</Link>
                </div>
            </div>
    </footer >
  )
}

export default Footer