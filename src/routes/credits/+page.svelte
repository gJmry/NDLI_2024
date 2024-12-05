<script>
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

<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
  <!-- Vérifie s'il y a des contributeurs -->
  {#if contributors.length}
    {#each contributors as contributor}
      <!-- Carte pour chaque contributeur -->
      <div class="card p-4 flex flex-col items-center space-y-4">
        <Avatar
          src={contributor.avatar_url}
          width="w-16 h-16"
          alt={contributor.login}
        />
        <h3 class="h3 text-center">{contributor.login}</h3>
        <a
          href={contributor.html_url}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Voir le profil GitHub
        </a>
      </div>
    {/each}
  {:else}
    <p class="text-center">Chargement des contributeurs...</p>
  {/if}
</div>
