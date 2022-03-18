import { ErrorBoundaryComponent, LoaderFunction, useLoaderData } from 'remix';
import MainLayout from '~/layouts/MainLayout';
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
      <div className="w-full flex flex-col items-center space-y-8">
        <img
          src={photoURL}
          alt="Foto Profil"
          className="w-[120px] max-w-[200px] h-auto rounded-1 md:w-[200px]"
        />
        <p className="">Hi, my name is</p>
        <p className="text-[#e41749] text-md md:text-2xl lg:text-5xl font-bold tracking-wide">
          Muhammad Rayhan Hamada Budiman
        </p>
        <p className="text-xs md:text-base">
          Student. Programmer. Procrastinator. Web Developer.
        </p>
        <hr className="h-[1px] w-[80%] bg-[#e41749]" />
        <div className="w-[80%] text-center space-y-8"></div>
      </div>
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
