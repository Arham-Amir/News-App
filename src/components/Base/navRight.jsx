import Link from "next/link";

const NavRight = (props= {}) => {
  return (
    <section className={`${props.className} flex justify-end gap-10 pr-10 text-lg`}>
      <Link href='/' className="hover:text-blue-600">Home</Link>
      <Link href='/business' className="hover:text-blue-600">Business</Link>
      <Link href='/technology' className="hover:text-blue-600">Technology</Link>
      <Link href='/sports' className="hover:text-blue-600">Sports</Link>
      <Link href='/search' className="hover:text-blue-600">Search</Link>
    </section>
  );
}

export default NavRight;
