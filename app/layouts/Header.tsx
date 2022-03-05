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
    <header className="flex flex-col w-full space-y-2 bg-[#202020] bg-opacity-90 border py-4 md:flex-row md:px-8 md:justify-between md:space-y-0">
      <div>
        <Link to="/">
          <p className="text-center text-[#e41749] text-xl">
            <span className="font-bold">Mocchapine |</span>{' '}
            <span className="font-thin">Rayhan Hamada</span>
          </p>
        </Link>
      </div>
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
