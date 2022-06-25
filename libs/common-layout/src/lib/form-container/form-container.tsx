import { ReactNode } from 'react';

import styles from './form-container.module.scss';

/* eslint-disable-next-line */
export interface FormContainerProps {
  children: ReactNode;
}

export function FormContainer(props: FormContainerProps) {
  return (
    <div className={styles['container']}>
      {props.children}
    </div>
  );
}

export default FormContainer;
