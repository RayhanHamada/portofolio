import { Link } from 'remix';

const links = [
  {
    to: '/',
    title: 'Me',
  },
  {
    to: '/projects',
    title: 'Projects',
  },
  {
    to: '/stack',
    title: 'Tech Stack',
  },
  {
    to: '/contact',
    title: 'Contact',
  },
  {
    to: '/blogs',
    title: 'Blogs',
  },
];

const Header: React.FC = (_props) => {
  return (
    <header className="flex flex-row w-full items-center space-y-2 bg-[#202020] bg-opacity-90 border py-4 px-4 md:flex-row md:justify-between md:space-y-0">
      <Link to="/">
        <p className="text-center text-[#e41749] text-xl">
          <span className="text-[#e41749] text-xl align-bottom mr-2">&gt;</span>
          <span className="font-bold">Mocchapine |</span>{' '}
          <span className="font-thin">Rayhan Hamada</span>
        </p>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex flex-col items-center align-middle justify-between space-y-1 text-white/75 md:flex-row md:space-x-4 md:items-center md:space-y-0">
          {links.map((link) => (
            <li key={link.to} className="my-0">
              <Link className="hover:underline" to={link.to}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
