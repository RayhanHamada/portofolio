<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<div>
  <img src={data.avatarURL} alt="" />
</div>
