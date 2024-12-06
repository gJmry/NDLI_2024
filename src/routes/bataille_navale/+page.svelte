<style>
    @import './bataille_navale.css';
</style>

<div id="page">
    <div id="title">
        <h1 class="text-tertiary-500">Une nation ennemie vous attaque !</h1>
        <p class="text-secondary-700">Trouvez leur navires et réduisez les à néant !</p>
    </div>

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

    
    <div id="result">
        <p></p>
    </div>
    <div id="actions">
        <button class="bg-warning-500">Recommencer</button>
        <button class="bg-error-500">JSP</button>
    </div>
</div>


<script>
    import { onMount } from "svelte";

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

        for(let i = 0; i < 100; i++){
            cells[i].addEventListener("click", function(){
                if(!trials.includes(i)){
                    console.log(this);
                    var img = document.createElement("img");
                    if(board[i] != "none"){
                        let destroyed = false;
                        switch(board[i]){
                            case "torpilleur":
                                torpilleur--;
                                torpilleur == 0 ? destroyed=true : destroyed=false;
                                break
                            case "sousMarin":
                                sousMarin--;
                                break
                            case "contreTorpilleur":
                                contreTorpilleur--;
                                break
                            case "croiseur":
                                croiseur--;
                                break
                            case "porteAvion":
                                porteAvion--;
                                break
                            default:
                                break
                        }
                        if(destroyed){
                            
                        }
                        img.src = "./bataille_navale/fire.svg";
                    }else{
                        img.src = "./bataille_navale/cross-mark.svg";
                    }
                    this.appendChild(img);  
                    trials.push(i);
                }
            });
        }
    });
</script>