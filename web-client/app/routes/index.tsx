import { ErrorBoundaryComponent, LoaderFunction, useLoaderData } from 'remix';
import MainLayout from '~/layouts/MainLayout';
import MeLayout from '~/layouts/routeLayouts/MeLayout';
import octokit from '~/utils/octokit';

interface Data {
  photoURL: string;
}

export const loader: LoaderFunction = async (args): Promise<Data> => {
  const res = await octokit.rest.users.getByUsername({
    username: 'RayhanHamada',
  });

  return {
    photoURL: res.data.avatar_url as string,
  };
};

export default function Index() {
  const { photoURL } = useLoaderData<Data>();
  return (
    <MainLayout>
      <MeLayout {...{ photoURL }} />
    </MainLayout>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      <h1 className="text-8xl">Waduh Error gan</h1>
      <small>{error.message}</small>
    </div>
  );
};
