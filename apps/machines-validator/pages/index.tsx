import { FC } from 'react';

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
} from '@zlab/shared-models';

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
}

const Index: FC<Props> = ({ customers }) => {

  return (
    <div>
      <h1>Customers Overview</h1>
      <br />
      <FormContainer>
        <FormField title="Select Customer">
          <Dropdown
            minimumSearchLength={2}
            onChange={(v) => {
              console.log(v);
            }}
            options={[
              { id: 1, label: 'test', value: 'test' },
              { id: 2, label: 'salam', value: 'salam' },
              { id: 3, label: 'bye', value: 'bye' },
            ]}
          />
        </FormField>
        <FormField title="Select Asset Type">
          <Dropdown
            minimumSearchLength={2}
            onChange={(v) => {
              console.log(v);
            }}
            options={[
              { id: 1, label: 'test', value: 'test' },
              { id: 2, label: 'salam', value: 'salam' },
              { id: 3, label: 'bye', value: 'bye' },
            ]}
          />
        </FormField>

        <FormField title="Warranty">
          <Checkbox
            onChange={(v) => alert(v.toString())}
            id="Warranty-Status"
            title=""
          />
        </FormField>

        <FormField title="Contract">
          <Checkbox
            onChange={(v) => alert(v.toString())}
            id="Service-Contract-Status"
            title=""
          />
        </FormField>

        <FormField title="">
          <Button type="primary">Apply filters</Button>
        </FormField>
      </FormContainer>

      <Table columns={tableHeaders} data={customers} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get<ICustomer[]>(
    'https://api.jsonbin.io/b/62b9da24192a674d291c921b'
  );

  return {
    props: {
      customers: data,
    },
  };
}

export default Index;
