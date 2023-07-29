import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-sky-800 px-8 py-3 text-md">
      <Link href={"/"} className="text-white font-bold text-lg">hasanDB</Link>
      <Link href={"/addTopic"} className="px-4 py-2 bg-white rounded-2xl">Add Topic</Link>
    </nav>
  );
}

export default Navbar;