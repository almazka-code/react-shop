import {Routes, Route} from "react-router-dom";
import { createContext, useState } from 'react';
import './styles/main.scss';

import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Cart } from "./pages/Cart/Cart";

export const SearchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;