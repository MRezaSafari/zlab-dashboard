import styled from 'styled-components';

export const Container = styled.nav`
  height: 44px;
  padding: 16px 0;
  background-color: rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavigationContainer = styled.ul`
  display: flex;
  gap: 24px;

  a {
    color: ${(props) => props.theme.colors?.title};
  }
`;
