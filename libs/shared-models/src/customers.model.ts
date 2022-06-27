interface ICustomer {
  id: number;
  guid: string;
  customer: string;
  asset_type: string;
  serial_number: string;
  service_contract: boolean;
  warranty: boolean;
}

interface IFilters {
  customer: string;
  asset_type: string;
  service_contract: boolean;
  warranty: boolean;
  serial_number: string;
}

export type { ICustomer, IFilters };
