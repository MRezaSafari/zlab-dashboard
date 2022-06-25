interface IDropdownProps {
  options: IDropdownOption[];
  minimumSearchLength?: number;
  onChange: (value: string) => void;
}

interface IDropdownOption {
  id: number;
  label: string;
  value: string;
}

export type { IDropdownOption, IDropdownProps };
