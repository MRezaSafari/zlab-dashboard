import { Dropdown } from '@zlab/shared-components';

export function Index() {
  return (
    <div>
      {/* TODO: Use firebase or any other authentication system */}
      <p>Hello Rico, Welcome to Machines validator dashboard!</p>

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
    </div>
  );
}

export default Index;
