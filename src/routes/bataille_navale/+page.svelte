<style>
    @import './bataille_navale.css';
</style>

<div id="win-popup" class="bg-success-500 popup">
    <p>Bravo vous avez triomphé.</p>
    <p>MAINTENANT NETTOYEZ MOI CE BORDEL!</p>
</div>

<div id="noreset-popup" class="bg-success-500 popup">
    <p>vous avez polué, vous devez assumer!</p>
</div>

<div id="page">
    <div id="title">
        <h1 class="text-tertiary-500">CAPTCHA : Une nation ennemie vous attaque !</h1>
        <p class="text-secondary-700">Trouvez leur navires et réduisez les à néant !</p>
    </div>

    <div id="center-container">
        <div id="cell-container">
        {#each {length: 10} as _, i}
            <div class="row">
            {#each {length: 10} as _, j}
                <div class="bg-primary-500 cell">
                </div>
            {/each}
            </div>
        {/each}
        </div>

        <div id="result" class="bg-secondary-500">
            <p class="bg-secondary-100"></p>
        </div>
    </div>

    <div id="actions">
        <button id="reset" class="bg-warning-500">Recommencer</button>
        <a id="back" class="bg-error-500" href="/home">Retour</a>
    </div>
</div>


<script>

    import {achievements} from "$lib/store.js";
    import { onMount } from "svelte";

    function toggleAchievement(id) {
        $achievements[id].completed = true;
    }

    // 1 porte avion (5 cases) 
    // 1 croiseur (4 cases) 
    // 1 contre torpilleur (3 cases) 
    // 1 sous-marin (3 cases) 
    // 1 torpilleur (2 cases) 
	onMount(async () => {

        let torpilleur = 2;
        let sousMarin = 3;
        let contreTorpilleur = 3;
        let croiseur = 4;
        let porteAvion = 5;
        let aliveNbr = 5;
        let cleaned = 0;

        const board = [
            "none", "none", "contreTorpilleur", "contreTorpilleur", "contreTorpilleur", "none", "none", "none", "none", "none", 
            "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", 
            "torpilleur", "none", "none", "none", "none", "none", "none", "none", "none", "none", 
            "torpilleur", "none", "none", "none", "none", "none", "none", "none", "none", "none", 
            "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", 
            "none", "none", "none", "none", "none", "none", "porteAvion", "porteAvion", "porteAvion", "none", 
            "none", "none", "none", "none", "none", "none", "none", "porteAvion", "porteAvion", "none", 
            "none", "none", "none", "none", "none", "none", "none", "none", "none", "sousMarin", 
            "none", "croiseur", "croiseur", "croiseur", "croiseur", "none", "none", "none", "none", "sousMarin", 
            "none", "none", "none", "none", "none", "none", "none", "none", "none", "sousMarin"
        ]

        let trials = [];

        const cells = document.getElementsByClassName("cell");
        const result = document.getElementById("result").children[0];
        const winPopup = document.getElementById("win-popup");
        const resetPopup = document.getElementById("reset-popup");

        for(let i = 0; i < 100; i++){
            cells[i].addEventListener("click", function torpedo(){
                let resultString = "";
                if(!trials.includes(i)){
                    resultString = "Touché";
                    let img = document.createElement("img");
                    if(board[i] != "none"){
                        let destroyed = false;
                        switch(board[i]){
                            case "torpilleur":
                                torpilleur--;
                                torpilleur == 0 ? destroyed="Torpilleur" : destroyed="none";
                                break
                            case "sousMarin":
                                sousMarin--;
                                sousMarin == 0 ? destroyed="Sous Marin" : destroyed="none";
                                break
                            case "contreTorpilleur":
                                contreTorpilleur--;
                                contreTorpilleur == 0 ? destroyed="Contre Torpilleur" : destroyed="none";
                                break
                            case "croiseur":
                                croiseur--;
                                croiseur == 0 ? destroyed="Croiseur" : destroyed="none";
                                break
                            case "porteAvion":
                                porteAvion--;
                                porteAvion == 0 ? destroyed="Porte Avion" : destroyed="none";
                                break
                            default:
                                break
                        }
                        img.src = "./bataille_navale/fire.svg";
                        if(destroyed != "none"){
                            resultString = "Le " + destroyed + " a été détruit";
                            aliveNbr--;
                            if(aliveNbr==0){
                                winPopup.style.top = "300px";
                                setTimeout(()=>{
                                    winPopup.style.top = "-150px";
                                    result.innerText = "Mission : Nettoyer les débris";
                                    this.removeEventListener("click", torpedo())
                                    messCleaning();
                                },8000)
                            }
                        }
                        result.innerText = resultString;
                    }else{
                        result.innerText = "Raté";
                        img.src = "./bataille_navale/cross-mark.svg";
                    }
                    cleaned++;
                    this.appendChild(img);  
                    trials.push(i);
                }
            });
        }

        const reset = document.getElementById("reset");
        
        reset.addEventListener("click", resetFunction());

        function resetFunction(){
            if(aliveNbr > 0){
                for(let i = 0; i < 100; i++){
                if(cells[i].children[0] != undefined)
                    cells[i].removeChild(cells[i].children[0])
                }
                result.innerText = "";
                torpilleur = 2;
                sousMarin = 3;
                contreTorpilleur = 3;
                croiseur = 4;
                porteAvion = 5;
                aliveNbr = 5;
                cleaned = 0;
                trials = [];
            }else{
                resetPopup.style.top = "300px";
                setTimeout(()=>{
                    resetPopup.style.top = "-150px";
                },10000)
            }
        }

        
        function messCleaning(){
            for(let i = 0; i < 100; i++){
                cells[i].addEventListener("click", function cleaning(){
                    if(cleaned != 0){
                        if(cells[i].children[0] != undefined)
                            cells[i].removeChild(cells[i].children[0])
                        cleaned--;
                        if(cleaned==0){
                            this.removeEventListener("click", cleaning());
                        }
                    }else{
                        toggleAchievement(6);
                        setTimeout(()=>{
                            aliveNbr = 5;
                            let trials = [];
                            resetFunction();
                        }, 6000)
                    }
                })
            }
        }
    });
</script>