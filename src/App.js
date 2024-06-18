import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Catalog } from './components/pages/Catalog/Catalog';

import './styles/main.scss';

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;