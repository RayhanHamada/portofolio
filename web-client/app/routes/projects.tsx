import { ErrorBoundaryComponent, RouteComponent } from 'remix';
import MainLayout from '~/layouts/MainLayout';

const Projects: RouteComponent = (_props) => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col">
        <p className="text-center text-2xl text-[#e41749] font-bold">
          My Projects
        </p>
        {/* list projects */}
        <div className="w-full flex flex-col align-center">
          <p className="text-center pt-8">
            Under Construction, click{' '}
            <a
              href="https://github.com/RayhanHamada"
              target="_blank"
              className="underline"
            >
              Here
            </a>{' '}
            to see my projects
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      <h1 className="text-8xl">Waduh Error gan</h1>
      <small>{error.message}</small>
    </div>
  );
};
