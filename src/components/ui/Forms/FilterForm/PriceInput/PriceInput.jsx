import styles from './PriceInput.module.scss';

// const getMaxPrice = (data) => {
//   return Math.max(...data.map((item) => item.price));
// };

export const PriceInput = () => {
  // const maxPrice = getMaxPrice(DATA);

  const priceFilters = [
    {
      value: 'От',
      name: 'min-price',
      placeholder: '0',
    },
    {
      value: 'До',
      name: 'max-price',
      // placeholder: maxPrice.toString(),
      placeholder: '12345',
    },
  ];

  return (
    <>
      {priceFilters.map((input) => (
        <label key={input.name} className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name={input.name}
            placeholder={input.placeholder}
          />
          <span className={styles.value}>{input.value}</span>
        </label>
      ))}
    </>
  );
};
