<script lang="ts">
  import type { PageData } from './$types';
  import { cvLink, deviconLogos, links } from 'src/utils/constants';

  export let data: PageData;
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
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{devLogos}.svg"
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
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{lo.logo}.svg"
          alt={lo.logo}
        />
      </a>
    {/each}
  </div>
  <a
    href={cvLink}
    target="_blank"
    class="font-bold text-2xl underline underline-offset-4">My CV</a
  >
</div>
