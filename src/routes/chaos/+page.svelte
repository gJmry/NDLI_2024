<script>
    import Popup from './Popup.svelte';
    // import {form} from './form.svelte';

    let input1 = "";
    let input2 = "";
    let input3 = "";
    let input4 = "";
    let submitCounter = 0;
    let showPopup = false;

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
        microPlasticCount = 0;
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

    .checkbox-container {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .checkbox-container label {
        margin-left: 10px;
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
    <input id="input_décalé" type="text" bind:value={input4} required />

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
        <button type="button" class="counter-button reset" on:click={restartMicroPlasticCounter}>
            reset
        </button>
    </div>

    <label>Dans quel organe du corps retrouve-t-on du micro plastique ? Issus de la pollution des océans notamment</label>
    <div class="checkbox-container">
        <input type="checkbox" class="question_check" id="1" name="question_check" value={checkboxes[0]} checked={checkboxes[0]} disabled>
        <label for="1">Poumon</label>
    </div>
    <div class="checkbox-container">
        <input type="checkbox" class="question_check" id="2" name="question_check" value={checkboxes[1]} checked={checkboxes[1]} disabled>
        <label for="2">Estomac</label>
    </div>
    <div class="checkbox-container">
        <input type="checkbox" class="question_check" id="3" name="question_check" value={checkboxes[2]} checked={checkboxes[2]} disabled>
        <label for="3">Testicule</label>
    </div>
    <div class="checkbox-container">
        <input type="checkbox" class="question_check" id="4" name="question_check" value={checkboxes[3]} checked={checkboxes[3]} disabled>
        <label for="4">Foie</label>
    </div>
    <button type="button" class="checkbox-button" on:click={() => toggleCheckbox()}>Toggle</button>


    <button type="submit">Submit</button>
</form>

<Popup isOpen={showPopup} onClose={closePopup} onYes={submitForm} />
