<script lang="js">
  import { onMount } from "svelte";
  import { Avatar } from "@skeletonlabs/skeleton";

  let contributors = [];
  let loading = true;

  async function fetchContributors() {
    try {
      const response = await fetch(
        "https://api.github.com/repos/gJmry/NDLI_2024/contributors",
      );
      contributors = await response.json();
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des contributeurs :",
        error,
      );
    } finally {
      loading = false;
    }
  }

  onMount(fetchContributors);
</script>

<div class="flex items-center flex-col p-4">
  <h1 class="h1">
    <span
      class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
      >Contributeurs.</span
    >
  </h1>
  <h1 class="h1">
    <span
      class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
      >By GitHub.</span
    >
  </h1>
</div>
<div class="w-full text-token flex flex-wrap justify-center gap-4 p-2">
  {#if contributors.length}
    {#each contributors as contributor}
      <div
        class="card p-4 flex flex-col items-center space-y-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <Avatar
          src={contributor.avatar_url}
          width="w-16 h-16"
          alt={contributor.login}
        />
        <h3 class="h3 text-center">{contributor.login}</h3>

        <!-- Chips Skeleton UI -->
        <a
          href={contributor.html_url}
          target="_blank"
          rel="noopener noreferrer"
          class="chip chip-primary chip-interactive rounded variant-soft bg-slate-200 hover:variant-filled flex items-center gap-2 hover:scale-105"
        >
          <span>Voir le profil Github</span>
        </a>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    {/each}
  {:else}
    <p class="text-center">Chargement des contributeurs...</p>
  {/if}
</div>
