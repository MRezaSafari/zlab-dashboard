import {
  FC,
  useState,
} from 'react';

import axios from 'axios';

import {
  FormContainer,
  FormField,
} from '@zlab/common-layout';
import {
  Button,
  Checkbox,
  Dropdown,
  Table,
} from '@zlab/shared-components';
import {
  ColumnTemplate,
  ICustomer,
  IDropdownOption,
  IFilters,
} from '@zlab/shared-models';
import {
  filterCustomers,
  generateOptionsByKey,
} from '@zlab/shared-utilities';

const tableHeaders: ColumnTemplate[] = [
  {
    title: 'ID',
    width: '5%',
    type: 'string',
    valueKey: 'id',
    sortable: true,
  },
  {
    title: 'Customer',
    width: '20%',
    type: 'string',
    valueKey: 'customer',
    sortable: false,
  },
  {
    title: 'Serial Number',
    width: '20%',
    type: 'string',
    valueKey: 'serial_number',
    sortable: false,
  },
  {
    title: 'Asset Type',
    width: '20%',
    type: 'string',
    valueKey: 'asset_type',
    sortable: true,
  },
  {
    title: 'Service Contract Status',
    width: '20%',
    type: 'boolean',
    valueKey: 'service_contract',
    sortable: true,
  },
  {
    title: 'Warranty Status',
    width: '20%',
    type: 'boolean',
    valueKey: 'warranty',
    sortable: true,
  },
];

interface Props {
  customers: ICustomer[];
  assetTypesList: IDropdownOption[];
  customersList: IDropdownOption[];
}

const Index: FC<Props> = ({ customers, assetTypesList, customersList }) => {
  const [filteredData, setFilteredData] = useState<ICustomer[]>(customers);

  const [filters, setFilters] = useState<IFilters>();

  const handleFiltersChange = (key: keyof IFilters, newValue: string | boolean) => {
    const newFilters = Object.assign({}, filters);
    newFilters[key as string] = newValue;
    setFilters(newFilters);
  };

  const handleApplyFilter = () => {
    const filteredCustomers = filterCustomers(customers, filters);
    setFilteredData(filteredCustomers);
  };

  const handleResetFilters = () => {
    setFilters(null);
    setFilteredData(customers);
  }

  return (
    <div>
      <h1>Customers Overview</h1>
      <br />
      <FormContainer>
        <FormField title="Select Customer">
          <Dropdown
            initialValue={filters?.customer}
            minimumSearchLength={2}
            onChange={(v) => {
              handleFiltersChange('customer', v);
            }}
            options={customersList}
          />
        </FormField>
        <FormField title="Select Asset Type">
          <Dropdown
            initialValue={filters?.asset_type}
            minimumSearchLength={2}
            onChange={(v) => {
              handleFiltersChange('asset_type', v);
            }}
            options={assetTypesList}
          />
        </FormField>

        <FormField title="Warranty">
          <Checkbox
            initialValue={filters?.warranty}
            onChange={(v) => handleFiltersChange('warranty', v)}
            id="Warranty-Status"
            title=""
          />
        </FormField>

        <FormField title="Contract">
          <Checkbox
            initialValue={filters?.service_contract}
            onChange={(v) => handleFiltersChange('service_contract', v)}
            id="Service-Contract-Status"
            title=""
          />
        </FormField>

        <FormField title="">
          <Button type="primary" onClick={handleApplyFilter}>
            Apply filters
          </Button>
        </FormField>
        <FormField title="">
          <Button type="mute" onClick={handleResetFilters}>
            Reset filters
          </Button>
        </FormField>
      </FormContainer>

      <Table columns={tableHeaders} data={filteredData} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get<ICustomer[]>(
    'https://api.jsonbin.io/b/62b9da24192a674d291c921b'
  );

  const assetTypesList = generateOptionsByKey(data, 'asset_type');
  const customersList = generateOptionsByKey(data, 'customer');

  return {
    props: {
      customers: data,
      assetTypesList,
      customersList,
    },
  };
}

export default Index;
