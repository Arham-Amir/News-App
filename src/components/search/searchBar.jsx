const SearchBar = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <input className="w-[90%] h-16 p-3 focus-visible:outline-none rounded-b-lg" type="search" name="search" id="search" placeholder="Search" />
    </section>
  );
}

export default SearchBar;
