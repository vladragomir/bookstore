import React from "react";
import { mockData } from "../mockData.ts";
import classes from "./BookList.module.css";

interface Props {
  onAddToCart: (book: { id: number; title: string; price: number }) => void;
  searchQuery: string;
}

export const BookList = ({ onAddToCart, searchQuery }: Props) => {
  const filteredBooks = mockData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={classes.BookList}>
      {filteredBooks.map((book) => (
        <div key={book.id} className={classes.Book}>
          <h4>{book.title}</h4>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
          <button
            onClick={() =>
              onAddToCart({ id: book.id, title: book.title, price: book.price })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
