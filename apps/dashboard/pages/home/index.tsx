import { StyledDashboard } from './home.styles';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function HomePage(props: DashboardProps) {
  return (
    <StyledDashboard>
      <div className="container">
        <p>we</p>
        <p>rent</p>
        <p>the future</p>
      </div>
    </StyledDashboard>
  );
}

export default HomePage;
