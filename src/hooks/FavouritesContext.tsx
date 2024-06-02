import { createContext, useState, useContext, ReactNode } from 'react';

interface Book {
  title: string;
  author: string;
  book_image: string;
  description: string;
  price: number;
  rating: number;
}

interface FavoritesContextProps {
  favorites: Set<string>;
  favoriteBooks: Book[];
  toggleFavorite: (book: Book) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

  const toggleFavorite = (book: Book) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(book.title)) {
        newFavorites.delete(book.title);
        setFavoriteBooks((prevBooks) => prevBooks.filter((b) => b.title !== book.title));
      } else {
        newFavorites.add(book.title);
        setFavoriteBooks((prevBooks) => {
          const isBookAlreadyInFavorites = prevBooks.some((b) => b.title === book.title);
          if (!isBookAlreadyInFavorites) {
            return [...prevBooks, book];
          }
          return prevBooks;
        });
      }
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, favoriteBooks, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
