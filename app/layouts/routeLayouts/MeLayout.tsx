interface Props {
  photoURL: string;
}

const MeLayout: React.FC<Props> = ({ photoURL }) => {
  return (
    <>
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
          Student. Programmer. Procrastinator.
        </p>
        <hr className="h-[1px] w-[80%] bg-[#e41749]" />
        <div className="w-[80%] text-center space-y-8">
          <p className="text-xl text-[#e41749]">
            TLDR: I like to try things, if the effort doesn't output the exact
            things i want, i'm more than happy to eat the burnt cake.
          </p>
          <p className="">
            Honestly, i don't really know how i got here. All i know i was
            facing some problems, go try to build solution to solve it, or even
            better, try to improve the solution itself.
          </p>

          <p className="">
            Or in the absent of problems, i would think of something interesting
            like,
          </p>
          <p className="text-2xl">
            "What if i build a{' '}
            <a
              href="https://softwareengineering.stackexchange.com/questions/131196/is-there-a-personalizable-programming-language-you-can-use-to-convert-to-others"
              className="underline"
            >
              programming language that lets you specify your own syntax
            </a>{' '}
            ?"
          </p>
          <p className="">
            And so i try to build{' '}
            <a
              href="https://github.com/RayhanHamada/Exprezeene"
              className="underline"
            >
              Exprezeene
            </a>{' '}
            (in bahasa you can call it "Ekspresiin")
          </p>
          <p className="text-[#e41749]">
            But it failed :({' '}
            <small className="text-xs">more like unfinished</small>
          </p>
          <p>
            And instead, i finish{' '}
            <a
              href="https://github.com/RayhanHamada/jsonku"
              className="underline"
            >
              a dumb JSON parser
            </a>{' '}
            that initially built to works with{' '}
            <a
              href="https://github.com/RayhanHamada/Exprezeene"
              className="underline"
            >
              Exprezeene
            </a>
            .
          </p>
          <p>
            Or when that time i build a{' '}
            <a
              href="https://github.com/RayhanHamada/antlrtoolforyou"
              className="underline"
            >
              GUI JavaFX app
            </a>{' '}
            to generate a parser and lexer with{' '}
            <a href="https://github.com/antlr/antlr4" className="underline">
              ANTLR 4
            </a>{' '}
            CLI,
          </p>
          <p>
            Then after i'm getting used to terminal and bash i realize
            something,
          </p>
          <p className="text-2xl">
            "Why the hell i build it in the first place ?"
          </p>
          <p>
            And so this "try, failed, produce-other-things-instead" became a
            loop. And i kinda like it.
          </p>
        </div>
      </div>
    </>
  );
};

export default MeLayout;
