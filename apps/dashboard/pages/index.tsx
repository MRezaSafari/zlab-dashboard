import styled from 'styled-components';

import { Button } from '@zlab/shared-components';

const StyledPage = styled.main`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Button>Hello</Button>
    </StyledPage>
  );
}

export default Index;
