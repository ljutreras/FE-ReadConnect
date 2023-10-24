import { useState } from 'react'

const Search = ({searchByTitle}) => {

  const [title, setTitle] = useState('')

  const handleSearchByTitle = (e) => {
    e.preventDefault()
    searchByTitle(title)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className='containerSearch'>
      <form onSubmit={(e) => handleSearchByTitle(e)}>
        <input onChange={(e)=> handleTitle(e)} value={title} type="search" />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default Search