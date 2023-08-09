import { useDispatch, useSelector } from 'react-redux';
import { searchNews } from '@redux/newsStore'
import { useState } from 'react';


const SearchBar = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  function handleSearchButton() {
    dispatch(searchNews({ 'search' : value }))
  }
  return (
    <section className="w-full flex justify-center items-center mt-1 mb-6">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[60%] h-16 p-3 focus-visible:outline-none rounded-l-lg" type="search" name="search" id="search" placeholder="Search">
      </input>
      <button className='px-8 py-5 rounded-r-lg bg-indigo-600 text-white' onClick={handleSearchButton}>Search</button>
    </section>
  );
}

export default SearchBar;
