<script>
    export let isOpen = false;
    export let onClose;
    export let onYes;
</script>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popup {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    button {
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .yes:hover {
        background-color: rgb(231, 231, 231);
    }

    .yes{
        background-color: lightgray;
        margin-right: 80%;
    }

    .no{
        background-color: #1de771;
    }

    .no:hover {
        background-color: #0af36b;
    }
</style>

{#if isOpen}
    <div class="overlay" on:click={onClose}>
        <div class="popup" on:click|stopPropagation>
            <p>Voulez-vous continuer ?</p>
            <div class="buttons">
                <button class="yes" type="button" on:click={onYes}>yes</button>
                <button class="no" type="button" on:click={onClose}>non</button>
            </div>
        </div>
    </div>
{/if}
