import NavRight from "@components/Base/navRight";
import NavLeft from "@components/Base/navLeft";
const Navbar = () => {
  return (
    <section className="flex h-20 bg-zinc-200 py-2 px-5 items-center sticky top-0 shadow-lg">
      <NavLeft className='basis-1/2'></NavLeft>
      <NavRight className='basis-1/2'></NavRight>
    </section>
  );
}

export default Navbar;

