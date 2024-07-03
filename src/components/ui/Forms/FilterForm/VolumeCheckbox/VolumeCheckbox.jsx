import styles from './VolumeCheckbox.module.scss';

export const VolumeCheckbox = () => {
  const volumes = ['64gb', '128gb', '256gb', '512gb', '1tb'];

  return (
    <ul>
      {volumes.map((volume, index) => (
        <li className={styles.item} key={volume}>
          <label className={styles.label}>
            <input className={styles.check} type="checkbox" name="volume" value={volume} />
            <span className={styles.desc}>
              {(volume.slice(0, -2) + ' ' + volume.slice(-2)).toUpperCase()} <span>(313)</span>
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};
