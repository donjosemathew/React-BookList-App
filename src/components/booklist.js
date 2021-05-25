import React, { useContext } from "react";
import { BookContext } from "../contexts/bookContext";
import BookDetails from "./bookdetails";
const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id}></BookDetails>;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read</div>
  );
};

export default BookList;
