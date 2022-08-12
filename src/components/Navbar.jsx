import SearchBar from './SearchBar';
import UserAvatar from './UserAvatar';

const Navbar = ({ navOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 bg-white w-[calc(100vw-5rem)] h-20 px-8 py-2 flex justify-between z-10 ${
        navOpen ? 'w-[calc(100vw-15rem)]' : 'w-[calc(100vw-5rem)]'
      }`}
    >
      <SearchBar />
      <UserAvatar />
    </div>
  );
};

export default Navbar;
