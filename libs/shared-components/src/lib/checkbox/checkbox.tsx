import styles from './checkbox.module.scss';

/* eslint-disable-next-line */
export interface CheckboxProps {
  initialValue?: boolean;
  title: string;
  id: string;
  onChange: (checked: boolean) => void;
}

export function Checkbox({ id, initialValue, onChange, title }: CheckboxProps) {
  return (
    <div className={styles['container']}>
      <input
        id={id}
        type="checkbox"
        checked={initialValue ? initialValue : false}
        onChange={(e) => onChange(e.target.checked)}
        className={styles['switch']}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}

export default Checkbox;
