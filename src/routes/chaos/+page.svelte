<script>
    import Popup from './Popup.svelte';

    let input1 = "";
    let input2 = "";
    let submitCounter = 0;
    let showPopup = false;

    function handleSubmit(event) {
        event.preventDefault();
        submitCounter++;

        if (submitCounter % 3 === 0) {
            console.log("Input 1:", input1);
            console.log("Input 2:", input2);
            console.log("Form submitted successfully on attempt number", submitCounter);
            showPopup = true;
        } else {
            console.log("Submit ignored. Attempt number", submitCounter);
        }
    }

    function closePopup() {
        showPopup = false;
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
</style>

<form on:submit={handleSubmit}>
    <label for="input1">Texte 1:</label>
    <input id="input1" type="text" bind:value={input1} />

    <label for="input2">Texte 2:</label>
    <input id="input2" type="text" bind:value={input2} />

    <button type="submit">Submit</button>
</form>

<Popup isOpen={showPopup} onClose={closePopup} />