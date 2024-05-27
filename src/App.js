import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import styles from './index.scss';

const App = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;