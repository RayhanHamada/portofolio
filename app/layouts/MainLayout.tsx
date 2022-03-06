const MainLayout: React.FC = ({ children }) => {
  return (
    <main className="relative top-[61px] px-20 py-20 text-white">
      {children}
    </main>
  );
};

export default MainLayout;
