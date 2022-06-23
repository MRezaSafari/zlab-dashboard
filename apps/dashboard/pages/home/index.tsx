import { StyledDashboard } from './home.styles';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function HomePage(props: DashboardProps) {
  return (
    <StyledDashboard>
      <h1>Welcome to Dashboard!</h1>
    </StyledDashboard>
  );
}

export default HomePage;
