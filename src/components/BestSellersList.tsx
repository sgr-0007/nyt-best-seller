import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Book {
  title: string;
  author: string;
  book_image: string;
  description: string;
}

const BestSellersList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LeUEpSPmBC9zoUbUowdZGdlNCrioADwL`
        );
        setBooks(response.data.results.books);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">New York Times Bestsellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div key={book.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={book.book_image} alt={book.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="mt-2 text-sm">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersList;
