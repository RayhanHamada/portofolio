import { ErrorBoundaryComponent } from 'remix';

export default function Index() {
  return <div>{/* <p>gk error</p> */}</div>;
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      <h1 className="text-8xl">Waduh Error gan</h1>
      <small>{error.message}</small>
    </div>
  );
};
