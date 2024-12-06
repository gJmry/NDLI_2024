<script>
    import Popup from './Popup.svelte';
    import {achievements} from "$lib/store.js";

    function toggleAchievement(id) {
        $achievements[id].completed = true;
    }

    let input1 = "";
    let input2 = "";
    let input3 = "";
    let input4 = "";
    let submitCounter = 0;
    let showPopup = false;
    let bravo = false;

    let microPlasticCount = 10000;
    let interval;
    let isRunning = false;

    let checkboxes = [false, false, false, false];

    function handleSubmit(event) {
        event.preventDefault();
        submitCounter++;

        if (submitCounter % 3 === 0) {
            console.log("Input 1:", input1);
            console.log("Input 2:", input2);
            console.log("Input 3:", input3);
            console.log("Input 4:", input4);
            console.log("Microplastics:", microPlasticCount);
            console.log("Form submitted successfully on attempt number", submitCounter);
            showPopup = true;
        } else {
            console.log("Submit ignored. Attempt number", submitCounter);
        }
    }

    function closePopup() {
        showPopup = false;
    }

    function submitForm() {
        console.log("Form submitted with values:", { input1, input2, input3, input4, microPlasticCount });
        closePopup();
        toggleAchievement(5);
    }

    function startMicroPlasticCounter() {
        if (!isRunning) {
            isRunning = true;
            interval = setInterval(() => {
                if (microPlasticCount < 100000) {
                    microPlasticCount++;
                } else {
                    stopMicroPlasticCounter();
                }
            }, 50);
        }
    }

    function stopMicroPlasticCounter() {
        clearInterval(interval);
        isRunning = false;
    }

    function restartMicroPlasticCounter() {
        microPlasticCount = 10000;
    }

    function toggleCheckbox() {
        console.log(checkboxes);
        for (let i = checkboxes.length - 1; i >= 0; i--) {
            if (!checkboxes[i]) {
                checkboxes[i] = true;
                break;
            } else {
                checkboxes[i] = false;
            }
        }
        console.log(checkboxes);
    }

    function setBravo() {
        bravo = true;
    }
</script>

<style>
.bounds {
  width: 200px;
  height: 300px;
}

@keyframes hor-movement {
  from {
    margin-left: 0%;
  }
  to {
    margin-left: 100%;
  }
}

@keyframes ver-movement {
  from {
    margin-top: 0%;
  }
  to {
    margin-top: 100%;
  }
}

.image {
    background-color: azure;
  animation-name: hor-movement, ver-movement;
  animation-duration: 3.141s, 1.414s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}
</style>

<form class="max-w-md mx-auto p-6 bg-tertiary-500 rounded-lg shadow-lg bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKWJ3QaQrQbc0pDdNyYU0ZL1-fFPqqMVNWBA&s')]" on:submit={handleSubmit}>
    <h1 class="text-primary-500 text-2xl font-semibold mb-6 text-center">Formulaire de Microplastic</h1>

    <label for="input1" class="text-secondary-500 text-xl font-large">Nom</label>
    <input id="input1" type="text" bind:value={input1} class="w-full p-3 mt-2 border border-tertiary-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 mb-4 bg-primary-100" />

    <label for="input2" class="text-secondary-400 text-sm font-medium">1er Prénom</label>
    <input id="input2" type="text" bind:value={input2} class="w-full p-3 mt-2 border border-tertiary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-primary-600 mb-4 bg-secondary-200" />

    <label for="input3" class="text-secondary-600 text-sm font-medium">2eme Prénom</label>
    <input id="input3" type="text" bind:value={input3} class="w-full p-3 mt-2 border border-tertiary-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-600 mb-4 bg-primary-300" />

    <label for="input4" class="text-secondary-300 text-xs font-medium">3eme Prénom</label>
    <input id="input_décalé" type="text" bind:value={input4} required class="w-full p-3 mt-2 border border-tertiary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-800 mb-4 bg-secondary-300" />

    <label class="text-secondary-500 text-sm font-medium">Combien de micro particules de plastique ingère un humain par an ?</label>
    <div id="micro-plastique-counter" class="flex justify-between items-center mb-4 bg-tertiary-700 p-3 rounded-lg">
        <span class="text-tertiary-100 font-bold text-lg">{microPlasticCount}</span>
        <div class="space-x-2">
            <button type="button" class="px-4 py-2 bg-tertiary-500 text-white rounded-md hover:bg-tertiary-600" on:click={stopMicroPlasticCounter}>Stop</button>
            <button type="button" class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600" on:click={startMicroPlasticCounter}>Start</button>
            <button type="button" class="px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600" on:click={restartMicroPlasticCounter}>Reset</button>
        </div>
    </div>

    <label class="text-secondary-700 text-sm font-medium">Dans quel organe du corps retrouve-t-on du micro plastique ?</label>
    <div class="space-y-2 mb-4">
        <div class="flex items-center">
            <input type="checkbox" class="h-5 w-5" id="1" checked={checkboxes[0]} disabled />
            <label for="1" class="ml-2 text-secondary-500">Poumon</label>
        </div>
        <div class="flex items-center">
            <input type="checkbox" class="h-5 w-5" id="2" checked={checkboxes[1]} disabled />
            <label for="2" class="ml-2 text-secondary-400">Estomac</label>
        </div>
        <div class="flex items-center">
            <input type="checkbox" class="h-5 w-5" id="3" checked={checkboxes[2]} disabled />
            <label for="3" class="ml-2 text-secondary-300">Testicule</label>
        </div>
        <div class="flex items-center">
            <input type="checkbox" class="h-5 w-5" id="4" checked={checkboxes[3]} disabled />
            <label for="4" class="ml-2 text-secondary-700">Foie</label>
        </div>
    </div>

    <button type="button" class="w-full py-2 bg-tertiary-400 text-white rounded-md hover:bg-tertiary-500 mb-4" on:click={() => toggleCheckbox()}>Toggle Checkboxes</button>

    <label for="move-buttons">Les tortues marines sont particulièrement vulnérables aux microplastiques dans les océans. Parmi les impacts suivants, lequel est faux ?</label>
        <button type="button" class="w-full py-2 bg-tertiary-400 text-white rounded-md hover:bg-tertiary-500 mb-4 animate-bounce hover:animate-spin">K. Les microplastiques peuvent obstruer leur système digestif, entraînant des blessures internes.</button>
        <button type="button" class="w-full py-2 bg-tertiary-400 text-white rounded-md hover:bg-tertiary-500 mb-4 animate-bounce hover:animate-spin">XII. Ils libèrent des toxines dans l’organisme de la tortue, perturbant son métabolisme.</button>
        <button type="button" class="w-full py-2 bg-tertiary-400 text-white rounded-md hover:bg-tertiary-500 mb-4 animate-bounce hover:animate-spin">13.Les tortues consomment des microplastiques en les confondant avec des proies comme les méduses.</button>
        <button type="button" class="w-full py-2 bg-tertiary-400 text-white rounded-md hover:bg-tertiary-500 mb-4 animate-bounce hover:animate-spin">12. Les microplastiques favorisent la survie des tortue à leurs naissance en les camouflants</button>

    <label for="dvd">Acheter une gourde contribue t'il à une amélioration de votre senté et des océan ? Si non ne rien cliquer</label>
    <div class="bounds">
        <button type="button" class="image" on:click={() => setBravo()}>OUI</button>
    </div>
    {#if bravo}
        <p class="w-full py-2 bg-tertiary-400">Bravo !!!!</p>
    {/if}
    <button type="submit" class="w-full py-2 bg-primary-300 text-white rounded-md hover:bg-primary-400">Submit</button>
</form>

<Popup isOpen={showPopup} onClose={closePopup} onYes={submitForm} />
