import Link from "next/link";
import { navItems } from "../utils/data";

const Navbar = () => {
  return (
    <>
      <div>
        <Link href="/">
          <a className="font-Script font-bold  text-3xl">Tasmania</a>
        </Link>
      </div>

      <ul className="sm:flex sm:flex-1 sm:justify-end sm:gap-4 font-Script text-xl hidden">
        {navItems.map((item, index) => (
          <li key={index} className="grid items-center">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden grid items-center h-4  my-auto cursor-pointer">
        <span className="w-5 h-0.5 bg-black block before:block before:w-full before:h-0.5 before:bg-black before:transform before:translate-y-1.5 after:block after:w-full after:h-0.5 after:bg-black after:transform after:-translate-y-2 "></span>
      </div>
    </>
  );
};

export default Navbar;
