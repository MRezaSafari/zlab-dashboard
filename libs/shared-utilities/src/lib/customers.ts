import {
  ICustomer,
  IDropdownOption,
  IFilters,
} from '@zlab/shared-models';

const extractUniqueValues = (
  customers: ICustomer[],
  key: keyof ICustomer
): string[] => {
  return [...new Set(customers.map((c) => c[key]))] as string[];
};

const generateOptionsByKey = (
  customers: ICustomer[],
  key: keyof ICustomer
): IDropdownOption[] => {
  const uniqueValues = extractUniqueValues(customers, key);

  return uniqueValues.map((u, i) => {
    return {
      id: i,
      label: u,
      value: u,
    };
  });
};

const filterCustomers = (customers: ICustomer[], filters: IFilters) => {


  return customers.filter(customer => {
    return Object.keys(filters).every((filter: string) => {
      // @ts-ignore
      return filters[filter] === customer[filter]
    })
  })
};

export { filterCustomers, generateOptionsByKey };
