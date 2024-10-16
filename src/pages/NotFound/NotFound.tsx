import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

import { Button } from '../../components/ui/Buttons/Button/Button';

export const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ошибка 404</h2>
      <p className={styles.text}>
        Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно, она
        устарела, была удалена, или был введен неверный адрес в адресной строке.
      </p>
      <Link to="/">
        <Button className={styles.button} text="На главную" isColor={true} type="button" />
      </Link>
    </div>
  );
};
