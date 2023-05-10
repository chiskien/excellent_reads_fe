import {useEffect, useState} from "react";
import {Book} from "./models/book.ts";
import {endpoints} from "./services/book.service.ts";

function App() {
    const [books, setBooks] = useState<Book[]>([]);
    useEffect(() => {
        fetch(endpoints)
            .then(res => res.json())
            .then(data => setBooks(data))
    })
    return (<div>
        ${books.map((book) => {
        return <div>
            <img src={book.cover} alt="" height={200} width={200}/>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
        </div>
    })}
    </div>)
}

export default App
