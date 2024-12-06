<script>
    import { achievements } from "$lib/store.js";

    function toggleAchievement(index) {
        achievements.update(achievementsList => {
            const updatedAchievements = [...achievementsList];
            updatedAchievements[index].completed = !updatedAchievements[index].completed;
            return updatedAchievements;
        });
    }
</script>

<main>
    <h1>Liste des Achievements</h1>

    {#each $achievements as achievement, index}
        <div class="achievement">
            <label>
                <input type="checkbox" bind:checked={achievement.completed} on:change={() => toggleAchievement(index)}/>
                <span>{achievement.icon} {achievement.name}</span>
                <p>{achievement.description}</p>
                <span>{achievement.completed ? "(Complété)" : "(Non Complété)"}</span>
            </label>
        </div>
    {/each}
</main>
