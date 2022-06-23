import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonLayoutProps {}

const StyledCommonLayout = styled.div`
  color: pink;
`;

export function CommonLayout(props: CommonLayoutProps) {
  return (
    <StyledCommonLayout>
      <h1>Welcome to CommonLayout!</h1>
    </StyledCommonLayout>
  );
}

export default CommonLayout;
