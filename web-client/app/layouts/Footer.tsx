const Footer: React.FC = (_props) => {
  return (
    <footer className="w-full flex flex-col items-center bg-my-red pt-20 pb-1 pl-15 md:px-15">
      <p className="text-[#e41749] text-center text-xs">
        <a href="/" className="underline">
          This Website
        </a>{' '}
        created by Muhammad Rayhan Hamada Budiman. Made using{' '}
        <a href="https://reactjs.org/" className="underline" target="_blank">
          React
        </a>{' '}
        and{' '}
        <a href="https://remix.run/" className="underline" target="_blank">
          Remix
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
