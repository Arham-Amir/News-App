const NavRight = (props= {}) => {
  return (
    <section className={`${props.className} flex justify-end gap-10 pr-10 text-xl`}>
      <button className="hover:text-blue-600">Home</button>
      <button className="hover:text-blue-600">Search</button>
    </section>
  );
}

export default NavRight;
