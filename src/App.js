import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import './styles/main.scss';

import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
import { CartEmpty } from "./pages/CartEmpty/CartEmpty";
import { NotFound } from './pages/NotFound/NotFound';
import { CartFull } from "./pages/CartFull/CartFull";

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue}/>}/>
          {/* <Route path="/cart" element={<CartEmpty />}/> */}
          <Route path="/cart" element={<CartFull />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;