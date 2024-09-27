import {Routes, Route} from "react-router-dom";
import './styles/main.scss';

import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Cart } from "./pages/Cart/Cart";

const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/react-shop" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;