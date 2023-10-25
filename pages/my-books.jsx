/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Layout from '../components/Layout'
import MyBookCollection from "../components/MyBookCollection"


const MyBook = () => {

    const [load, setLoad] = useState(true)
    const [books, setBooks] = useState({
        data: [],
        totalPage: 0,
        page: 1,
        perPage: 12
    })

    useEffect(() => {
        const bookReaded = JSON.parse(localStorage.getItem('bookReaded'))
        const booksLength = bookReaded.length
        const totalPages = Math.trunc(booksLength / books.perPage) + 1;
        setBooks({ ...books, ['totalPage']: totalPages })
        setBooks({ ...books, ['data']: bookReaded })
        setLoad(false)
    }, [])

    return (
        <>
            <Layout>
                {!load && <MyBookCollection route='my-books' booksCollection={books} />}
            </Layout>
        </>
    )
}

export default MyBook