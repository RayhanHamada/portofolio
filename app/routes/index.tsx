import { ErrorBoundaryComponent } from 'remix';
import MainLayout from '~/layouts/MainLayout';

export default function Index() {
  return <MainLayout>Main Layout Disini</MainLayout>;
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      <h1 className="text-8xl">Waduh Error gan</h1>
      <small>{error.message}</small>
    </div>
  );
};
