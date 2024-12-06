<script>
    import {achievements} from "$lib/store.js";
</script>

<main class="min-h-screen p-6 bg-secondary-400">
    <h1 class="text-3xl font-semibold mb-8 text-center">Liste des succès</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each $achievements as achievement, index}
            <div class="card p-4 {achievement.completed ? '✅' : '❌'}bg-primary-200 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <div class="flex flex-col items-center">
                    <div class="text-6xl mb-4">
                        {achievement.icon}
                    </div>
                    <h2 class="text-xl font-semibold mb-2 text-center">
                        {achievement.name}
                    </h2>
                    <p class="text-sm text-gray-500 mb-4 text-center">
                        {achievement.description}
                    </p>
                    <div class="flex justify-center items-center">
                        <span class="ml-2 text-sm">
                            {achievement.completed ? "✅" : "❌"}
                        </span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>
