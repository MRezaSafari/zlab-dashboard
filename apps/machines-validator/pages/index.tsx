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
import { ColumnTemplate } from '@zlab/shared-models';

const tableHeaders: ColumnTemplate[] = [
  {
    title: 'ID',
    width: '5%',
    type: 'string',
    valueKey: 'id',
  },
  {
    title: 'Customer',
    width: '20%',
    type: 'string',
    valueKey: 'customer',
  },
  {
    title: 'Serial Number',
    width: '20%',
    type: 'string',
    valueKey: 'serial_number',
  },
  {
    title: 'Asset Type',
    width: '20%',
    type: 'colorize',
    valueKey: 'asset_type',
  },
  {
    title: 'Service Contract Status',
    width: '20%',
    type: 'boolean',
    valueKey: 'service_contract',
  },
  {
    title: 'Warranty Status',
    width: '20%',
    type: 'boolean',
    valueKey: 'warranty',
  },
];

export function Index() {
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

      <Table
        columns={tableHeaders}
        data={[
          {
            id: 1,
            guid: '104b2ed7-969d-4e3a-972a-531afb186906',
            customer: 'Kassulke & Sohn',
            asset_type: 'Dump Truck',
            serial_number: '1919-0038-4721-0Xpr',
            service_contract: true,
            warranty: true,
          },
          {
            id: 2,
            guid: '0493663d-e4fd-40df-b241-23ac6797476a',
            customer: 'Bayer-Bergnaum',
            asset_type: 'Grader',
            serial_number: '3878-4754-6100-SNDQ',
            service_contract: true,
            warranty: true,
          },
          {
            id: 3,
            guid: '9cfd794c-cfa9-4ee7-97bd-cea770096077',
            customer: 'Schinner Group',
            asset_type: 'Grader',
            serial_number: '1164-1973-2286-7yYb',
            service_contract: true,
            warranty: false,
          },
          {
            id: 4,
            guid: '92abdbac-b97b-414b-9619-76bc64fbdcf5',
            customer: 'Hintz & Sauer',
            asset_type: 'Compactor',
            serial_number: '6025-4667-9892-RiMd',
            service_contract: false,
            warranty: true,
          },
          {
            id: 5,
            guid: '45f7ae74-64e8-42a9-a803-9b45fb1675f6',
            customer: 'Harber Group',
            asset_type: 'Compactor',
            serial_number: '9253-9986-6558-2Zw2',
            service_contract: false,
            warranty: false,
          },
          {
            id: 6,
            guid: '3bad5732-472f-439c-aae0-f94151ecfc0b',
            customer: 'Hintz & Sauer',
            asset_type: 'Bulldozer',
            serial_number: '3315-9006-9752-B8nW',
            service_contract: false,
            warranty: true,
          },
          {
            id: 7,
            guid: 'dbaf60e9-c4c1-4bf4-a14a-fbde22abcd47',
            customer: 'Altenwerth KG',
            asset_type: 'Grader',
            serial_number: '4047-2889-7044-1CFb',
            service_contract: false,
            warranty: false,
          },
        ]}
      />
    </div>
  );
}

export default Index;
