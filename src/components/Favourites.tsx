import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../hooks/FavouritesContext'; 

const Favourites = () => {
  const { favoriteBooks } = useFavorites();

  if (favoriteBooks.length === 0) return <p>No favorites added yet</p>;

  return (
    <div className="bg-[#E9EDF6] w-full p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Your Favorite Books</h2>
        <div className="bg-white rounded-lg shadow-md mb-8 overflow-x-auto">
          <table className="table w-full">
            <tbody>
              {favoriteBooks.map((book) => (
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
                        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                      ))}
                      {[...Array(5 - book.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />
                      ))}
                    </div>
                  </td>
                  <td>{book.price} GBP</td>
                  <td>
                    <svg
                      
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#93B4BC"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`h-6 w-6 text-[#93B4BC]`}
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

export default Favourites;
