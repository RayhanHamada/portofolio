<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<div class="w-full flex flex-col items-center space-y-8">
  <img
    src={data.avatarURL}
    alt="Foto Profil"
    class="w-[120px] max-w-[200px] h-auto rounded-full md:w-[200px]"
  />
  <p class="">Hi, my name is</p>
  <p
    class="text-[#e41749] text-md md:text-2xl lg:text-5xl font-bold tracking-wide"
  >
    Muhammad Rayhan Hamada Budiman
  </p>
  <p class="text-xs md:text-base">
    Student. Programmer. <strike>Procrastinator</strike>. Web Developer.
  </p>
  <hr class="h-[1px] w-[80%] bg-[#e41749] border-0" />
</div>
