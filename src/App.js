import { useState } from 'react';
import Dashboard from './components/sections/Dashboard';
import SideBar from './components/sections/SideBar';

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='w-screen h-screen grid grid-cols-12'>
      <SideBar navOpen={navOpen} setNav={setNavOpen} />
      <Dashboard navOpen={navOpen} />
    </div>
  );
};

export default App;
