import {
  useEffect,
  useState,
} from 'react';

import {
  ChevronDown,
  ChevronUp,
} from 'react-feather';

import { ColumnTemplate } from '@zlab/shared-models';

import styles from './table.module.scss';

export interface TableProps<T> {
  columns: ColumnTemplate[];
  data: T[];
}

export const Table = <T,>({ columns, data }: TableProps<T>) => {
  const [sortedData, setSortedData] = useState<T[]>(data);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (key: string, order: 'ASC' | 'DESC') => {
    const newData = Object.assign([], data);

    if (order === 'ASC') newData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    if (order === 'DESC') newData.sort((a, b) => (a[key] < b[key] ? 1 : -1));

    setSortedData(newData);
  };

  const renderBoolean = (state: boolean) => {
    if (state)
      return (
        <div className={`${styles['state']} ${styles['true']}`}>Active</div>
      );

    return (
      <div className={`${styles['state']} ${styles['false']}`}>Not Active</div>
    );
  };

  const renderHeaders = () =>
    columns.map((r) => (
      <td key={r.title.toLowerCase()} width={r.width}>
        <div className={styles['table-header-item']}>
          <span>{r.title}</span>
          {r.sortable && (
            <ul>
              <li>
                <ChevronUp
                  width={15}
                  height={15}
                  onClick={() => handleSort(r.valueKey, 'ASC')}
                />
              </li>
              <li>
                <ChevronDown
                  width={15}
                  height={15}
                  onClick={() => handleSort(r.valueKey, 'DESC')}
                />
              </li>
            </ul>
          )}
        </div>
      </td>
    ));

  const renderRows = () =>
    [...Array(sortedData.length).keys()].map((row: number) => (
      <tr>
        {columns.map((r: ColumnTemplate) => (
          <td key={r.title.toLowerCase()} width={r.width}>
            {r.type === 'boolean' &&
              renderBoolean((sortedData as [])[row][r.valueKey] as boolean)}
            {r.type === 'string' && (sortedData as [])[row][r.valueKey]}
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
        {data.length > 0 && <tbody>{renderRows()}</tbody>}
      </table>
      {data.length === 0 && (
        <div className={styles['empty-state']}>No Data!</div>
      )}
    </div>
  );
};

export default Table;
