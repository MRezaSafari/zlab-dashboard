import {
  FormContainer,
  FormField,
} from '@zlab/common-layout';
import {
  Button,
  Checkbox,
  Dropdown,
} from '@zlab/shared-components';

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
          <Checkbox onChange={(v) => alert(v.toString())} id='Warranty-Status' title='' />
        </FormField>

        <FormField title="Contract">
          <Checkbox onChange={(v) => alert(v.toString())} id='Service-Contract-Status' title='' />
        </FormField>

        <FormField title="">
          <Button type="primary">Apply filters</Button>
        </FormField>
      </FormContainer>
    </div>
  );
}

export default Index;
