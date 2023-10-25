/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import MyBookCollection from "../components/MyBooks"
import Layout from '../components/Layout'


const ToRead = () => {

    const [load, setLoad] = useState(true)
    const [books, setBooks] = useState({
        data: [],
        totalPage: 0,
        page: 1,
        perPage: 12
    })

    useEffect(() => {
        const bookToRead = JSON.parse(localStorage.getItem('bookToRead'))
        const booksLength = bookToRead.length
        const totalPages = Math.trunc(booksLength / books.perPage) + 1;
        setBooks({ ...books, ['totalPage']: totalPages })
        setBooks({ ...books, ['data']: bookToRead })
        setLoad(false)
    }, [])

    return (
        <>
            <Layout>
                {!load && <MyBookCollection route='to-read' booksCollection={books} />}
            </Layout>
        </>
    )
}

export default ToRead