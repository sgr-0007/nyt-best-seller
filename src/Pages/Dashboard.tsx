import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/FavouritesContext';
import Nodata from '../components/Nodata'; // Adjust the import path as necessary

interface Book {
  title: string;
  author: string;
  book_image: string;
  description: string;
}

const Dashboard = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]); // State for filtered books
  const { favoriteBooks } = useFavorites();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const cachedBooks = localStorage.getItem('books');
        if (cachedBooks) {
          const parsedBooks = JSON.parse(cachedBooks).slice(0, 3);
          setBooks(JSON.parse(cachedBooks));
          setFilteredBooks(parsedBooks);
        } else {
          const response = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LeUEpSPmBC9zoUbUowdZGdlNCrioADwL`
          );
          const fetchedBooks = response.data.results.books;
          const bestsellers = fetchedBooks.slice(0, 3); // Limit to 3 books for bestsellers
          setBooks(fetchedBooks);
          setFilteredBooks(bestsellers);
          localStorage.setItem('books', JSON.stringify(fetchedBooks));
        }
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered.slice(0, 3));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#E9EDF6] w-full p-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-8 mt-8">
          <div className="relative w-full flex">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="What books would you like to find?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              className="w-full pl-10 pr-4 py-2 rounded-l-full border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button 
              className="px-6 py-2 rounded-r-full bg-[#93B4BC] text-white font-semibold"
              onClick={handleSearch} // Trigger search on button click
            >
              GO
            </button>
          </div>
        </div>
        <Link to="/bestsellers">
          <h2 className="text-2xl font-bold mb-3 hover:underline cursor-pointer">New York Times Bestsellers</h2>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredBooks.map((book) => (
            <div key={book.title} className="bg-white rounded-md shadow-md overflow-hidden">
              <img src={book.book_image} alt={book.title} className="w-full h-[204px] object-cover" />
            </div>
          ))}
        </div>
        <Link to="/favourites">
          <h2 className="text-2xl font-bold mb-3 hover:underline cursor-pointer">Favourites</h2>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {favoriteBooks.length === 0 ? (
            <p>No favorites to show</p>
          ) : (
            favoriteBooks.slice(0, 3).map((book) => (
              <div key={book.title} className="bg-white rounded-md shadow-md overflow-hidden">
                <img src={book.book_image} alt={book.title} className="w-full h-[204px] object-cover" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
