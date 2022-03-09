import { ErrorBoundaryComponent, RouteComponent } from 'remix';
import MainLayout from '~/layouts/MainLayout';
import ProjectLayout from '~/layouts/routeLayouts/ProjectLayout';

const Projects: RouteComponent = (_props) => {
  return (
    <MainLayout>
      <ProjectLayout />
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
