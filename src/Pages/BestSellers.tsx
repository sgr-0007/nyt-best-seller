import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFavorites } from '../hooks/FavouritesContext';

interface Book {
  title: string;
  author: string;
  book_image: string;
  description: string;
  price: number;
  rating: number;
}

const BestSellers = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const cachedBooks = localStorage.getItem('bestSellersBooks');
        if (cachedBooks) {
          setBooks(JSON.parse(cachedBooks));
          setLoading(false);
        } else {
          const response = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LeUEpSPmBC9zoUbUowdZGdlNCrioADwL`
          );
          const fetchedBooks = response.data.results.books.map((book: any) => ({
            title: book.title,
            author: book.author,
            book_image: book.book_image,
            description: book.description,
            price: Math.floor(Math.random() * 20) + 5,
            rating: Math.floor(Math.random() * 5) + 1,
          }));
          setBooks(fetchedBooks);
          // Cache the fetched books in localStorage
          localStorage.setItem('bestSellersBooks', JSON.stringify(fetchedBooks));
        }
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
    <div className="bg-[#E9EDF6] w-full p-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="relative w-full flex">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-l-full border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button className="px-6 py-2 rounded-r-full bg-[#93B4BC] text-white font-semibold">
              GO
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">New York Times Bestsellers</h2>
        <div className="bg-white rounded-lg shadow-md mb-8 overflow-x-auto">
          <table className="table w-full">
            <tbody>
              {books.map((book) => (
                <tr key={book.title}>
                  <td>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-500 mr-4 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold">{book.title}</p>
                        <p className="text-gray-600">{book.author}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      {[...Array(book.rating)].map((_, i) => (
                        <svg xmlns="http://www.w3.org/2000/svg" key={i} fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-500 h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                      ))}
                      {[...Array(5 - book.rating)].map((_, i) => (
                        <svg xmlns="http://www.w3.org/2000/svg" key={i} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-300 h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                      ))}
                    </div>
                  </td>
                  <td>{book.price} GBP</td>
                  <td>
                    <svg
                      onClick={() => toggleFavorite(book)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={favorites.has(book.title) ? '#93B4BC' : 'none'}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`h-6 w-6 cursor-pointer ${favorites.has(book.title) ? 'text-[#93B4BC]' : 'text-gray-500'
                        }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
