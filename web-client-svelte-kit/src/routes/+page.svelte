<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const deviconLogos = [
    'html5-original',
    'css3-original',
    'typescript-original',
    'javascript-original',
    'react-original',
    'dart-original',
    'flutter-original',
    'npm-original-wordmark',
    'yarn-original',
    'postgresql-original',
    'googlecloud-original',
  ];

  const links = [
    {
      link: 'https://github.com/RayhanHamada',
      logo: 'github-original',
    },
    {
      link: 'https://www.linkedin.com/in/muhammad-rayhan-hamada-budiman-033021194/',
      logo: 'linkedin-original',
    },
  ];
</script>

<div class="w-full flex flex-col items-center space-y-8">
  <img
    src={data.avatarURL}
    alt="Foto Profil"
    class="w-[120px] max-w-[200px] h-auto rounded-full md:w-[200px]"
  />
  <p class="">Hi, my name is</p>
  <p class="text-[#e41749] md:text-2xl lg:text-5xl font-bold tracking-wide">
    Muhammad Rayhan Hamada Budiman
  </p>
  <p class="text-xs md:text-base">
    Student. Programmer. <strike>Procrastinator</strike>. Web Developer.
  </p>
  <hr class="h-[1px] w-[80%] bg-[#e41749] border-0" />
  <p class="text-lg font-bold">I'm quite familiar with these technologies</p>
  <div class="flex flex-row space-x-4">
    {#each deviconLogos as devLogos}
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{devLogos.split(
          '-'
        )[0]}/{devLogos}.svg"
        alt={devLogos}
        class="h-[25px] md:h-[45px]"
      />
    {/each}
  </div>

  <p class="text-lg font-bold">You can find me on these links</p>
  <div class="flex flex-row space-x-4">
    {#each links as lo}
      <a href={lo.link} target="_blank">
        <img
          class="h-[25px] md:h-[45px]"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{lo.logo.split(
            '-'
          )[0]}/{lo.logo}.svg"
          alt={lo.logo}
        />
      </a>
    {/each}
  </div>
  <a
    href="https://1drv.ms/b/s!AkHRxXV_ERCXihIgArOYtt3qfha9?e=aCYYs1"
    target="_blank"
    class="font-bold text-2xl underline underline-offset-4">My CV</a
  >
</div>
