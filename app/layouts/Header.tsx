import { Link } from 'remix';
import HeaderLogo from '~/components/HeaderLogo';

const Header: React.FC = (_props) => {
  return (
    <header className="fixed z-10 flex flex-row w-full items-center space-y-2 border-0 border-b-1 border-solid border-[#e41749] bg-[#202020] bg-opacity-90 py-4 px-4">
      <Link to="/">
        <HeaderLogo />
      </Link>
    </header>
  );
};

export default Header;
