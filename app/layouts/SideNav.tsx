import { AiFillLinkedin, AiFillProject } from 'react-icons/ai';
import { FaJs, FaPencilAlt, FaUser } from 'react-icons/fa';
import { RiProfileFill } from 'react-icons/ri';
import { Link } from 'remix';

const links = [
  {
    to: '/',
    title: 'Me',
    icon: FaUser,
  },
  {
    to: '/projects',
    title: 'Projects',
    icon: AiFillProject,
  },
  {
    to: '/stack',
    title: 'Tech Stack',
    icon: FaJs,
  },
  {
    to: '/contact',
    title: 'Contact',
    icon: AiFillLinkedin,
  },
  {
    to: '/blogs',
    title: 'Blogs',
    icon: FaPencilAlt,
  },
  {
    to: '/resume',
    title: 'My Resume',
    icon: RiProfileFill,
  },
];

const SideNav: React.FC = (_props) => {
  return (
    <nav className="fixed z-9 px-7 h-full flex flex-col bg-[#202020] w-2 overflow-x-hidden border-0 border-r-1 border-solid border-[#e41749] hover:w-xs">
      <ul className="relative py-4 flex flex-col space-y-4 top-[61px]">
        {links.map(({ title, to, icon: Icon }) => (
          <li key={to} className="my-0">
            <Link
              className="hover:underline text-white flex flex-row items-center space-x-3"
              to={to}
            >
              <span>{<Icon size="1.2em" style={{ color: 'white' }} />}</span>
              <span className=""> {title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
