import Layout from '../components/Layout'
import BookCollection from "../components/BookCollection"
import Search from '../components/Search'
import { useState } from 'react'

const url = process.env.SERVER_URL

export default function Home({ booksCollection }) {

  const [books, setBooks] = useState(booksCollection)
  const [load, setLoad] = useState(true)

  const searchByTitle = async (title) => {
    setLoad(false)
    const res = await fetch(`${url}/books/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title })
    })
    const _books = await res.json()
    _books && setLoad(true);
    setBooks(_books)
  }

  return (
    <Layout>
      <Search searchByTitle={searchByTitle} />
      {load && <BookCollection booksCollection={books} />}
    </Layout>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`${url}/books/paginator?page=1&perPage=12`)
  const booksCollection = await res.json()
  return { props: { booksCollection } }

}