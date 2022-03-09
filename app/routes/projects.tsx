import { ErrorBoundaryComponent, RouteComponent } from 'remix';
import MainLayout from '~/layouts/MainLayout';

const Projects: RouteComponent = (_props) => {
  return (
    <MainLayout>
      <div className="w-full ">
        <p className="text-center text-2xl text-[#e41749]">
          Under Construction
        </p>
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
