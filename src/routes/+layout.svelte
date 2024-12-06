<script>
	import "../app.css";
	let { children } = $props();
    import {achievements} from "$lib/store.js";
    import {onMount} from "svelte";

    function toggleAchievement(id) {
        $achievements[id].completed = true;
    }
    onMount(() => {
        const storedAchievements = localStorage.getItem('achievements');
        if (storedAchievements) {
            achievements.set(JSON.parse(storedAchievements));
        }
    });
</script>

{@render children()}
