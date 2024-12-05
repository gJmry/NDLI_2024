<script>
    import Popup from './Popup.svelte';

    let input1 = "";
    let input2 = "";
    let input3 = "";
    let input4 = "";
    let submitCounter = 0;
    let showPopup = false;

    let microPlasticCount = 10000;
    let interval;
    let isRunning = false;

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
            }, 50); // Change the speed as needed
        }
    }

    function stopMicroPlasticCounter() {
        clearInterval(interval);
        isRunning = false;
    }
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
    }

    label {
        margin: 10px 0 5px;
    }

    input {
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    #input_décalé {
        margin-top: 20px;
        margin-left: 80%;
    }

    #micro-plastique-counter {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .counter-button {
        margin-left: 10px;
        padding: 5px 10px;
    }

    .stop{
        background-color: #1de771;
    }
    .start{
        background-color: #ff0000;
    }
    .start:hover{
        background-color: #ff0000;
    }
    .stop:hover{
        background-color: #1de771;
    }
</style>

<form on:submit={handleSubmit}>
    <label for="input1">Nom</label>
    <input id="input1" type="text" bind:value={input1} />

    <label for="input2">1er Prenom</label>
    <input id="input2" type="text" bind:value={input2} />

    <label for="input3">2eme Prenom</label>
    <input id="input3" type="text" bind:value={input3} />

    <label for="input_décalé">3eme Prenom</label>
    <input id="input_décalé" type="text" bind:value={input4} />

    <label>
        Combien de micro particules de plastique ingère un humain par an ?
    </label>
    <div id="micro-plastique-counter">
        <span>{microPlasticCount}</span>
        <button type="button" class="counter-button stop" on:click={stopMicroPlasticCounter}>
            Stop
        </button>
        <button type="button" class="counter-button start" on:click={startMicroPlasticCounter}>
            Start
        </button>
    </div>

    <button type="submit">Submit</button>
</form>

<Popup isOpen={showPopup} onClose={closePopup} onYes={submitForm} />
