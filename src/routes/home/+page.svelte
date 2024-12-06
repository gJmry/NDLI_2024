<script>
    import facts from '$lib/facts.json';
</script>


<div class="flex flex-col min-h-screen bg-surface-500">
    <header class="bg-primary-500 text-white py-4 shadow-md">
        <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1 mx-8 space-x-8">
            <a class="logo-item" href="/">
                <i class="fa-solid fa-circle-question"></i>
                <span>Quizz</span>
            </a>
            <a class="logo-item" href="/">
                <i class="fa-solid fa-ship"></i>
                <span>Bataille navale</span>
            </a>
            <a class="logo-item" href="/">
                <i class="fa-solid fa-address-card"></i>
                <span>Credit</span>
            </a>
        </div>
    </header>

    <main class="flex flex-col space-y-8 px-8">
        {#each facts as fact, i}
            <div class="flex items-center space-x-4 {fact.imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'}">
                <div class="flex flex-col w-36 h-36">
                    <img alt={fact.title} src={fact.image} />
                </div>
                <div class="text-content">
                    <h2 class="text-xl font-bold">{fact.title}</h2>
                    <p>{fact.content}</p>
                </div>
            </div>
        {/each}
    </main>
</div>
