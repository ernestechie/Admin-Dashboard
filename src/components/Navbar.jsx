import SearchBar from './SearchBar';
import UserAvatar from './UserAvatar';

const Navbar = () => {
  return (
    <div className={`bg-white w-full h-20 px-8 py-2 flex justify-between`}>
      <SearchBar />
      <UserAvatar />
    </div>
  );
};

export default Navbar;
