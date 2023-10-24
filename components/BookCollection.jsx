/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

const FirstButton = ({ handleClick, page, totalPage  }) => {
    return <>
        {
            page === totalPage ?
                <button onClick={()=>handleClick(page-2)}> {page - 2}</button> :
                <button onClick={()=>handleClick(page === 1 ? 1 : page - 1)}> {page === 1 ? 1 : page - 1}</button>
        }
    </>
};
const SecondButton = ({ handleClick, page, totalPage }) => {
    return <>
        {
            page === totalPage ?
                <button onClick={()=>handleClick(page - 1)}> {page - 1}</button> :
                <button onClick={()=>handleClick(page > 1 ? page : page + 1)}> {page > 1 ? page : page + 1}</button>
        }
    </>
};
const ThirdButton = ({ handleClick, page, totalPage }) => {
    return <>
        {
            page === totalPage ?
                <button onClick={()=>handleClick(page)}> {page}</button> :
                <button onClick={()=>handleClick(page === 1 ? 1 + 2 : page + 1)}> {page === 1 ? 1 + 2 : page + 1}</button>
        }

    </>
};

export default function BookCollection({ booksCollection }) {

    const [books, setBooks] = useState(booksCollection);

    const fetchBooks = async (pages) => {
        const res = await fetch(`http://localhost:3001/books/paginator?page=${pages}&perPage=12`)
        const _books = await res.json()
        setBooks(_books)
    }

    const increment = (nextPage) => {
        nextPage !== books.totalPage && fetchBooks(nextPage + 1)
    }

    const decrement = (prevPage) => {
        prevPage > 1 && fetchBooks(prevPage - 1)
    }

    const handleClick = (page) => {
        fetchBooks(page)
    }

    return (
        <div className="cardContainer">
            {
                books.data.map((item, index) => (
                    <div key={index} className="card">
                        <div className="cardItem">
                            <div className="cardTitle">
                                <h1>{item.title && item.title}</h1>
                            </div>
                            <div className='cardContent'>
                                {
                                    item.thumbnailUrl ? <Image
                                        src={item.thumbnailUrl}
                                        width={150}
                                        height={187}
                                        alt="Picture of the author"
                                    /> : <Image
                                        src="/images/image_not_found.jpg"
                                        width={150}
                                        height={187}
                                        alt="Picture of the author"
                                    />

                                }
                            </div>
                            <div className="cardAction">
                                <div className="piblishDate">
                                    <span>{item.publishedDate ? item.publishedDate : 'Not available'}</span>
                                </div>
                                <div className="author">
                                    <span>{item.authors[0] && item.authors[0]}</span>
                                </div>
                            </div>
                            <div className="cardInfo">
                                <p><b>{item.title && item.title ? item.title && item.title : 'Undefined'}</b></p>
                                <p>{item.authors ? item.authors.join(', ') : 'Undefined'}</p>
                                <p>{item.publishedDate ? item.publishedDate : 'Not available'}</p>
                                <p>{item.categories.join(', ') ? item.categories.join(', ') : 'Undefined'}</p>
                                <p>{item.shortDescription ? item.shortDescription : 'Description not available'}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="pageContainer">
                <div className="page">
                    <div className="buttonPrev" onClick={(_) => decrement(Number(books.page))}>
                        <button>◄</button>
                    </div>
                    <div className="currentPage">
                        <FirstButton handleClick={handleClick} page={Number(books.page)} totalPage={Number(books.totalPage)} />
                        <SecondButton handleClick={handleClick} page={Number(books.page)} totalPage={Number(books.totalPage)}/>
                        <ThirdButton handleClick={handleClick} page={Number(books.page)} totalPage={Number(books.totalPage)} />
                    </div>
                    <div className="buttonNext" onClick={(_) => increment(Number(books.page))}>
                        <button>►</button>
                    </div>
                </div>
            </div>
        </div>
    )
}