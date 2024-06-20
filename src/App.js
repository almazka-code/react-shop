import {Routes, Route} from "react-router-dom";

import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
import { CartEmpty } from "./pages/CartEmpty/CartEmpty";
import { NotFound } from './pages/NotFound/NotFound';

import './styles/main.scss';


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<CartEmpty />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;