import sidebarData from '../../data/SidebarData';

const SideBar = ({ navOpen, setNav }) => {
  return (
    <nav
      className={`h-full p-4 bg-white shadow-lg
      ${
        navOpen ? ' col-span-2' : 'col-span-1'
      } transition duration-500 ease-in`}
    >
      <h1 className={`text-xl font-semibold text-center mb-8 mt-4`}>
        <span className={`text-blue-700 mx-2 text-3xl`}>
          <ion-icon name='logo-buffer'></ion-icon>
        </span>
        <span className={`text-blue-300 ${!navOpen && 'hidden'}`}>Wells</span>
        <span className={`text-gray-700 ${!navOpen && 'hidden'}`}>Fargo</span>
      </h1>
      <ul>
        {sidebarData.map((data, index) => (
          <li
            className={`sidebar-icon ${navOpen ? 'flex px-4' : 'block px-1'}`}
            key={index}
            onClick={navOpen ? () => setNav(false) : () => setNav(true)}
          >
            <ion-icon name={data.icon}></ion-icon>
            <span className={`${navOpen ? 'block' : 'hidden'}`}>
              {data.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
