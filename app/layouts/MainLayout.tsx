const MainLayout: React.FC = ({ children }) => {
  return (
    <main className="relative flex flex-col top-[61px] pl-15 pr-0 py-10 text-white">
      {children}
    </main>
  );
};

export default MainLayout;
