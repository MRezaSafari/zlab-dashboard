type ColumnType = 'string' | 'colorize' | 'boolean';

interface ColumnTemplate {
  title: string;
  width: string;
  type: ColumnType;
  valueKey: string;

}

export type { ColumnTemplate, ColumnType };
