import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BestSellers from './components/BestSellers';
import FavouritesPage from './components/Favourites'; 
import { FavoritesProvider } from './hooks/FavouritesContext'; 

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <div className="flex flex-col h-screen w-screen overflow-hidden">
          <Header />
          <div className="flex h-screen w-screen flex-row">
            <Sidebar />
            <div className="flex flex-col w-full h-full flex-1 scroll-auto overflow-scroll">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/bestsellers" element={<BestSellers />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
