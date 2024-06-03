import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFavorites } from '../hooks/FavouritesContext';
import ToastNotification, { showToast } from '../components/ToastNotification';

interface Book {
    title: string;
    author: string;
    book_image: string;
    description: string;
    price: number;
    rating: number;
}

const EditFavourites = () => {
    const { title } = useParams<{ title: string }>();
    const navigate = useNavigate();
    const { favoriteBooks, updateFavorite } = useFavorites();
    const [book, setBook] = useState<Book | undefined>(undefined);

    useEffect(() => {
        const bookToEdit = favoriteBooks.find((b) => b.title === title);
        if (bookToEdit) {
            setBook(bookToEdit);
        }
    }, [title, favoriteBooks]);

    const handleUpdate = () => {
        if (book) {
            updateFavorite(book);
            showToast(`${book.title} updated successfully`);
        }
    };

    if (!book) return <p>Loading...</p>;

    return (
        <div className="bg-[#E9EDF6] w-full p-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="relative mb-8">
                    <img src={book.book_image} alt={book.title} className="rounded-md w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-2xl font-bold text-center">{book.title} by {book.author}</h2>
                    </div>
                </div>
                <div className="max-w-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Edit</h3>
                    <div className="mb-4 flex items-center">
                        <label className="block text-lg font-semibold text-[#FFFFFF] bg-[#93B4BC] p-2 w-24 rounded-l-lg text-center">Cost</label>
                        <input
                            type="number"
                            value={book.price}
                            onChange={(e) => setBook({ ...book, price: +e.target.value })}
                            className="p-2 border rounded-r-lg w-full text-lg"
                        />
                    </div>
                    <div className="mb-4 flex items-center bg-white">
                        <label className="block text-lg font-semibold text-[#FFFFFF] bg-[#93B4BC] p-2 w-24 rounded-l-lg text-center">Rating</label>
                        <div className="flex items-center p-2 w-full rounded-r-lg border">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={i < book.rating ? "currentColor" : "none"}
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`h-6 w-6 ${i < book.rating ? "text-yellow-500" : "text-gray-300"}`}
                                    onClick={() => setBook({ ...book, rating: i + 1 })}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleUpdate}
                        className="px-6 py-3 text-white rounded-full w-1/2 text-xl bg-gradient-to-r from-[#679CF6] to-[#4072EE] shadow-lg transform transition-transform hover:scale-105"
                    >
                        UPDATE
                    </button>
                </div>
                <div className="mt-8">
                    <button onClick={() => navigate('/favourites')} className="text-[#93B4BC] hover:underline">
                        &larr; Return to: Favourites
                    </button>
                </div>
            </div>
            <ToastNotification />
        </div>
    );
};

export default EditFavourites;
