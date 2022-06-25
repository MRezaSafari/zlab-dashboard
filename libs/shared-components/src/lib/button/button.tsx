import React from 'react';

import { ButtonType } from '@zlab/shared-models';

import styles from './button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
}

export function Button({ children, onClick, type = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles['button-container']} ${styles[`type-${type}`]}`}
    >
      {children}
    </button>
  );
}

export default Button;
