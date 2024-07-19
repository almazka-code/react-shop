import {Routes, Route} from "react-router-dom";
import { createContext, useState } from 'react';
import './styles/main.scss';
import { useSelector} from 'react-redux';

import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
import { CartEmpty } from "./pages/CartEmpty/CartEmpty";
import { NotFound } from './pages/NotFound/NotFound';
import { CartFull } from "./pages/CartFull/CartFull";

export const SearchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />}/>
            {cartItems.length ? (
              <Route path="/cart" element={<CartFull />}/>
            ) : (
              <Route path="/cart" element={<CartEmpty />}/>
            )}
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;