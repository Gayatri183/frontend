const Dashboard = () => {
  return (
    <>
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row">
        <StatCard title="Members" value="120" />
        <StatCard title="Trainers" value="15" />
        <StatCard title="Plans" value="6" />
        <StatCard title="Revenue" value="₹2,50,000" />
      </div>
    </>
  );
};

const StatCard = ({ title, value }) => (
  <div className="col-md-3 mb-3">
    <div className="card shadow-sm text-center">
      <div className="card-body">
        <h6 className="text-muted">{title}</h6>
        <h3>{value}</h3>
      </div>
    </div>
  </div>
);

export default Dashboard;
