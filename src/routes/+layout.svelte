<script>
    import {onMount} from "svelte";
    import {achievements} from "$lib/store.js";
    import "../app.css";

    let {children} = $props();

    let visible = $state(false);
    let message = $state("");
    let title = $state("");
    let icon = $state("");

    function displaySuccessAlert(achievement) {
        title = `Succès : ${achievement.name}`;
        message = achievement.description;
        icon = achievement.icon;
        visible = true;

        setTimeout(() => {
            visible = false;
        }, 5000);
    }


    $effect(() => {
        $achievements.forEach((achievement) => {
            if (achievement.completed) {
                displaySuccessAlert(achievement);
            }
        });
    });

    onMount(() => {
        const storedAchievements = localStorage.getItem('achievements');
        if (storedAchievements) {
            achievements.set(JSON.parse(storedAchievements));
        }
    });

    function toggleAchievement(id) {
        const achievement = $achievements[id];
        achievement.completed = !achievement.completed;
        achievements.set([...$achievements]);
    }
</script>

{@render children()}

{#if visible}
    <aside class="alert alert-success bg-green-100 border border-green-400 text-green-700 rounded-md p-4 shadow-lg fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-md z-50">
        <div class="inline-block mr-3 text-xl">
            {icon}
        </div>
        <div class="alert-message inline-block">
            <h3 class="text-lg font-semibold">{title}</h3>
            <p>{message}</p>
        </div>
        <div class="alert-actions mt-2">
            <button
                    class="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 focus:outline-none"
                    onclick={() => visible = false}>
                Fermer
            </button>
        </div>
    </aside>
{/if}
