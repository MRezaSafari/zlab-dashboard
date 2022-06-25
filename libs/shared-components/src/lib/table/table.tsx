import { ColumnTemplate } from '@zlab/shared-models';

import styles from './table.module.scss';

/* eslint-disable-next-line */
export interface TableProps {
  columns: ColumnTemplate[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export function Table({ columns, data }: TableProps) {

  const renderBoolean = (state: boolean) => {
    if (state)
      return <div className={`${styles["state"]} ${styles["true"]}`}>Active</div>

    return <div className={`${styles["state"]} ${styles["false"]}`}>Not Active</div>
  }

  const renderColorize = (value: string) => {
    return <p style={{color: '#fff'}}>{value}</p>
  }

  const renderHeaders = () =>
    columns.map((r) => (
      <td key={r.title.toLowerCase()} width={r.width}>
        {r.title}
      </td>
    ));

  const renderRows = () =>
    [...Array(data.length).keys()].map((row) => (
      <tr>
        {columns.map((r) => (
          <td key={r.title.toLowerCase()} width={r.width}>
            {r.type === 'boolean' && renderBoolean(data[row][r.valueKey] as boolean)}
            {r.type === 'string' && data[row][r.valueKey]}
            {r.type === 'colorize' && renderColorize(data[row][r.valueKey])}
          </td>
        ))}
      </tr>
    ));

  return (
    <div className={styles['container']}>
      <table>
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
}

export default Table;
