import { ErrorBoundaryComponent, RouteComponent } from 'remix';
import MainLayout from '~/layouts/MainLayout';

const Tech: RouteComponent = (_props) => {
  return (
    <MainLayout>
      <p className="text-center text-2xl text-[#e41749]">Under Construction</p>
    </MainLayout>
  );
};

export default Tech;

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      <h1 className="text-8xl">Waduh Error gan</h1>
      <small>{error.message}</small>
    </div>
  );
};
