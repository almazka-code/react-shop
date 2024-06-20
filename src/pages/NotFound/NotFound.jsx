import { SubmitButton } from '../../components/ui/Buttons/Submit/SubmitButton';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ошибка 404</h2>
      <p className={styles.text}>
        Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно, она
        устарела, была удалена, или был введен неверный адрес в адресной строке.
      </p>
      <Link to="/">
        <SubmitButton className={styles.button} text="На главную" isColor={true} />
      </Link>
    </div>
  );
};
