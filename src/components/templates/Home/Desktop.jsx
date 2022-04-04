import DefaultDashboard from '../../organisms/DefaultDashboard';

const Desktop = ({ width }) => {
  return (
    <div
      data-testid="dashboard"
      data-width={width}
      className="t-home t-home--desktop"
    >
      <DefaultDashboard />
    </div>
  );
}

export default Desktop;
