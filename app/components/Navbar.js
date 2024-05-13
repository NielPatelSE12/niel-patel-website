import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 py-4">
      <ul className="flex justify-center space-x-8 text-white">
        <li>
          <Link href="/about">
            <p className="hover:text-gray-300 cursor-pointer">About Me</p>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <p className="hover:text-gray-300 cursor-pointer">Projects and Skills</p>
          </Link>
        </li>
        <li>
          <Link href="/accomplishments">
            <p className="hover:text-gray-300 cursor-pointer">Accomplishments</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="hover:text-gray-300 cursor-pointer">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
