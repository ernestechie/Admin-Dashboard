import Navbar from '../Navbar';
import DashboardBody from './DashboardBody';

const Dashboard = ({ navOpen }) => {
  return (
    <div className={`bg-blue-50 ${navOpen ? 'col-span-10' : 'col-span-11'}`}>
      <Navbar />
      <DashboardBody />
    </div>
  );
};

export default Dashboard;
