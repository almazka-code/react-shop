import styles from './VolumeCheckbox.module.scss';

type VolumeCheckboxProps = {
  volumes: string[];
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VolumeCheckbox: React.FC<VolumeCheckboxProps> = ({ volumes, onVolumeChange }) => {
  return (
    <ul>
      {volumes.map((volume) => (
        <li className={styles.item} key={volume}>
          <label className={styles.label}>
            <input
              className={styles.check}
              type="checkbox"
              name="volume"
              value={volume}
              onChange={onVolumeChange}
            />
            <span className={styles.desc}>
              {(volume.slice(0, -2) + ' ' + volume.slice(-2)).toUpperCase()}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};
