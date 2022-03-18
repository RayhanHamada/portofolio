const MainLayout: React.FC = ({ children }) => {
  return (
    <main className="relative w-full flex flex-col top-[61px] min-h-[86vh] pl-15 pr-0 py-10 text-white md:px-15">
      {children}
    </main>
  );
};

export default MainLayout;
