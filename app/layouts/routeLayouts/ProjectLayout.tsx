import { useEffect } from 'react';

const ProjectLayout: React.FC = (_props) => {
  useEffect(() => {
    // octokit.rest.repos.listForUser({username: 'RayhanHamada', type: 'owner'}).then(())
  }, []);

  return (
    <>
      <div className="w-full flex flex-col">
        <p className="text-center text-2xl text-[#e41749] font-bold">
          My Projects
        </p>
        {/* list projects */}
        <div className="w-full flex flex-col justify-center"></div>
      </div>
    </>
  );
};

export default ProjectLayout;
