<script>
    import facts from '$lib/facts.json';
</script>

<div class="flex flex-col min-h-screen bg-surface-500 ocean-background">
    <header class="bg-primary-500 text-white py-6 shadow-lg rounded-b-2xl">
        <div class="logo-cloud grid-cols-1 lg:grid-cols-4 gap-1 mx-8 space-x-1">
            <a class="logo-item bg-slate-800" href="/chaos">
                <i class="fa-solid fa-circle-question"></i>
                <span>Quizz</span>
            </a>
            <a class="logo-item bg-slate-800" href="/bataille_navale">
                <i class="fa-solid fa-ship "></i>
                <span>Bataille navale</span>
            </a>
            <a class="logo-item bg-slate-800" href="/credits">
                <i class="fa-solid fa-address-card"></i>
                <span>Crédits</span>
            </a>
            <a class="logo-item bg-slate-800" href="/achievements">
                <i class="fa-solid fa-trophy"></i>
                <span>Succès</span>
            </a>
        </div>
    </header>

    <!-- Le contenu fixe -->
    <div class="content-wrapper">
        <main class="flex flex-col space-y-8 px-8 py-8">
            {#each facts as fact, i}
                <div class=" flex items-center space-x-4 {fact.imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'}">
                    <div class="image-container flex flex-col w-36 h-36">
                        <i class="{fact.image} fa-2xl"></i>
                        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
                    </div>
                    <div class="text-content">
                        <h2 class="text-xl font-bold">{fact.title}</h2>
                        <p>{fact.content}</p>
                    </div>
                </div>
            {/each}
        </main>
    </div>

    <!-- Bulles flottantes -->
    <div class="wrapper">
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
    </div>
</div>

<style>
    /* Fond d'océan avec dégradé */
    .ocean-background {
      background: linear-gradient(to bottom, #1e3c72, #1151c0); /* dégradé bleu de l'océan */
      position: relative;
      overflow: hidden;
      height: 100%;
    }
  
    * {
      margin: 0;
      padding: 0;
    }
  
    /* Conteneur pour le contenu fixe */
    .ocean-background {
    background: linear-gradient(to bottom, #1e3c72, #1151c0); /* dégradé bleu de l'océan */
    position: relative;
    overflow: hidden;
    height: 100%;
}

/* Conteneur pour le contenu fixe */
.content-wrapper {
    position: relative;
    z-index: 10;  /* Contenu principal au-dessus des bulles */
    padding-top: 20px;
}

/* Wrapper des bulles en arrière-plan */
.wrapper {
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, #04fafd, 5%, #119dff, 50%, #030423);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
}

/* Positionnement des bulles */
.wrapper div {
    height: 60px;
    width: 60px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    position: absolute;
    animation: animate 8s linear infinite;
    z-index: 0;
}
  
    /* Définition de l'animation des bulles */
    @keyframes animate {
      0% {
        transform: scale(0) translateY(0);
      }
      100% {
        transform: scale(1.3) translateY(-200px);  /* Moins élevé pour les bulles */
        opacity: 0;
      }
    }
  
    .dot {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      position: absolute;
      top: 20%;
      right: 20%;
    }
  
    /* Ajustement pour chaque bulle */
    .wrapper div:nth-child(1) {
      top: 20%;
      left: 20%;
      animation-duration: 8s;
    }
    .wrapper div:nth-child(2) {
      top: 60%;
      left: 80%;
      animation-duration: 10s;
    }
    .wrapper div:nth-child(3) {
      top: 40%;
      left: 40%;
      animation-duration: 3s;
    }
    .wrapper div:nth-child(4) {
      top: 66%;
      left: 30%;
      animation-duration: 7s;
    }
    .wrapper div:nth-child(5) {
      top: 90%;
      left: 10%;
      animation-duration: 9s;
    }
    .wrapper div:nth-child(6) {
      top: 30%;
      left: 60%;
      animation-duration: 5s;
    }
    .wrapper div:nth-child(7) {
      top: 70%;
      left: 20%;
      animation-duration: 8s;
    }
    .wrapper div:nth-child(8) {
      top: 75%;
      left: 60%;
      animation-duration: 10s;
    }
    .wrapper div:nth-child(9) {
      top: 50%;
      left: 50%;
      animation-duration: 6s;
    }
    .wrapper div:nth-child(10) {
      top: 45%;
      left: 20%;
      animation-duration: 10s;
    }
    .wrapper div:nth-child(11) {
      top: 10%;
      left: 90%;
      animation-duration: 9s;
    }
    .wrapper div:nth-child(12) {
      top: 20%;
      left: 70%;
      animation-duration: 7s;
    }
    .wrapper div:nth-child(13) {
      top: 20%;
      left: 20%;
      animation-duration: 8s;
    }
    .wrapper div:nth-child(14) {
      top: 60%;
      left: 5%;
      animation-duration: 6s;
    }
    .wrapper div:nth-child(15) {
      top: 90%;
      left: 80%;
      animation-duration: 9s;
    }
  
/* Style pour la barre de navigation */
header {
    background: linear-gradient(135deg, rgb(3, 59, 119) 0%, rgba(0, 204, 255, 1) 100%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    z-index: 20;
    position: relative;
}
  
.logo-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
}

.logo-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.logo-cloud {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 0 2rem;
}
  
.text-content {
    color: white;
    max-width: 70%;
}

.text-content h2 {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
}

.text-content p {
    color: white;
    font-size: 0.9rem;
    line-height: 1.5;
}

div.text-content{
    display:flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
}

div.text-content:nth-child(2n){
    justify-content: flex-end;
}

.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

  </style>
  
