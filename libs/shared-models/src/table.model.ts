type ColumnType = 'string' | 'boolean';

interface ColumnTemplate {
  title: string;
  width: string;
  type: ColumnType;
  valueKey: string;
  sortable: boolean;
}

export type { ColumnTemplate, ColumnType };
