import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  isColor?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ text, isColor, onClick, className, type }) => {
  return (
    <button
      className={`${styles.button} ${isColor ? styles.primary : styles.transparent} ${className} `}
      type={type}
      onClick={onClick}>
      {text}
    </button>
  );
};
