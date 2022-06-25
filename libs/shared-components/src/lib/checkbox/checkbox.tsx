import styles from './checkbox.module.scss';

/* eslint-disable-next-line */
export interface CheckboxProps {
  title: string;
  id: string;
  onChange: (checked: boolean) => void;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div className={styles['container']}>
      <input id={props.id} type="checkbox" onChange={(e) => props.onChange(e.target.checked)} className={styles['switch']} />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
}

export default Checkbox;
