import { ReactNode } from 'react';

import styles from './form-field.module.scss';

/* eslint-disable-next-line */
export interface FormFieldProps {
  children: ReactNode;
  title: string;
}

export function FormField(props: FormFieldProps) {
  return (
    <div className={styles['container']}>
      <p>{props.title}</p>
      <div className={styles['field-container']}>{props.children}</div>
    </div>
  );
}

export default FormField;
