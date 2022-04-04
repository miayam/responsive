import VerticalDashboard from '../../organisms/VerticalDashboard';

const Mobile = ({ width }) => {
  return (
    <div
      data-testid="dashboard"
      data-width={width}
      className="t-home t-home--mobile"
    >
      <VerticalDashboard />
    </div>
  );
}

export default Mobile;