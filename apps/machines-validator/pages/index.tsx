import {
  FormContainer,
  FormField,
} from '@zlab/common-layout';
import { Dropdown } from '@zlab/shared-components';

export function Index() {
  return (
    <div>
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
       
      </FormContainer>
    </div>
  );
}

export default Index;
