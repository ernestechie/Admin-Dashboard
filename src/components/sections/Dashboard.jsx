import Navbar from '../Navbar';
import DashboardBody from './DashboardBody';

const Dashboard = ({ navOpen }) => {
  return (
    <div
      className={`absolute right-0 top-0 w-[calc(100vw-5rem)] bg-blue-50 ${
        navOpen ? 'w-[calc(100vw-15rem)] ' : 'w-[calc(100vw-5rem)] '
      }`}
    >
      <Navbar navOpen={navOpen} />
      <DashboardBody />
    </div>
  );
};

export default Dashboard;
