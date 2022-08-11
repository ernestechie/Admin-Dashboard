import Navbar from '../Navbar';

const Dashboard = ({ navOpen }) => {
  return (
    <div className={`bg-blue-50 ${navOpen ? 'col-span-10' : 'col-span-11'}`}>
      <Navbar />
      Dashboard
    </div>
  );
};

export default Dashboard;
