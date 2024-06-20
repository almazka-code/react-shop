import {Routes, Route} from "react-router-dom";

import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';

import './styles/main.scss';

const App = () => {
  return (
    <div class="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;