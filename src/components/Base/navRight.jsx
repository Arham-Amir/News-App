'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavRight = (props = {}) => {
  const pathname = usePathname();
  return (
    <section className={`${props.className} flex justify-end gap-10 pr-10 text-lg nav_links`}>
      <Link href='/' className={`hover:text-red-600 ${pathname == '/' && 'text-red-600'}`}>Home</Link>
      <Link href='/business' className={`hover:text-red-600 ${pathname == '/business' && 'text-red-600'}`}>Business</Link>
      <Link href='/technology' className={`hover:text-red-600 ${pathname == '/technology' && 'text-red-600'}`}>Technology</Link>
      <Link href='/sports' className={`hover:text-red-600 ${pathname == '/sports' && 'text-red-600'}`}>Sports</Link>
      <Link href='/search' className={`hover:text-red-600 ${pathname == '/search' && 'text-red-600'}`}>Search</Link>
    </section>
  );
}

export default NavRight;
