import Link from "next/link";

const NavRight = (props= {}) => {
  return (
    <section className={`${props.className} flex justify-end gap-10 pr-10 text-xl`}>
      <Link href='/' className="hover:text-blue-600">Home</Link>
      <Link href='/search' className="hover:text-blue-600">Search</Link>
    </section>
  );
}

export default NavRight;
