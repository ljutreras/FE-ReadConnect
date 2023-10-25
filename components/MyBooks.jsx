/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

const url = process.env.SERVER_URL

export default function MyBookCollection({ booksCollection, route }) {

    const [books, setBooks] = useState(booksCollection);

    const handleBookReadedDelete = (item) => {
        const email = localStorage.getItem('email')
        fetch(`/users/sign-in/users/book/readed/${item.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then((response) => response.json())
            .catch((error) => {
                console.error("Error:", error)
                alert('invalid sign up')
            })
            .then((response) => {
                if (response) {
                    let bookReaded = JSON.parse(localStorage.getItem('bookReaded'))
                    const newbookReaded = bookReaded.filter((element) => {
                        return element.id !== item.id
                    })
                    localStorage.setItem('bookReaded', JSON.stringify(newbookReaded))
                    setBooks({ ...books, ['data']: newbookReaded })
                    return;
                }
                console.error('invalid sign up')
            });


    }
    const handleBookToReadDelete = (item) => {
        const email = localStorage.getItem('email')
        fetch(`${url}/users/book/to-read/${item.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then((response) => response.json())
            .catch((error) => {
                console.error("Error:", error)
                alert('invalid sign up')
            })
            .then((response) => {
                if (response) {
                    let bookToRead = JSON.parse(localStorage.getItem('bookToRead'))
                    const newbookReaded = bookToRead.filter((element) => {
                        return element.id !== item.id
                    })
                    localStorage.setItem('bookToRead', JSON.stringify(newbookReaded))
                    setBooks({ ...books, ['data']: newbookReaded })
                    return;
                }
                console.error('invalid sign up')
            });
    }

    return (
        <div className="cardContainer">
            {
                books.page &&
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
                                <div className="cardInfoAction">
                                    <button className="btnSmall" onClick={(_) => route === 'my-books' ? handleBookReadedDelete(item) : handleBookToReadDelete(item)}>🗑️</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}