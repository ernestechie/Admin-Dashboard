const SearchBar = () => {
  return (
    <div className='w-1/2 py-2'>
      <input
        type='text'
        className='w-full h-full rounded-full bg-transparent border-2 outline-none p-4'
        placeholder='Search...'
      />
    </div>
  );
};

export default SearchBar;
