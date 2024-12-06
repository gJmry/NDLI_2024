import { writable } from 'svelte/store';
import rawAchievements from '$lib/achievements.json';

// Vérifier si nous sommes dans le navigateur (côté client)
const isClient = typeof window !== 'undefined';

// Charger les achievements depuis localStorage si disponibles, sinon utiliser rawAchievements par défaut
const storedAchievements = isClient ? localStorage.getItem('achievements') : null;
const achievementsData = storedAchievements ? JSON.parse(storedAchievements) : rawAchievements;

// Créer un store avec les achievements chargés
export const achievements = writable(achievementsData);

// Sauvegarder les achievements dans localStorage chaque fois qu'ils sont modifiés (uniquement côté client)
if (isClient) {
    achievements.subscribe((achievementsList) => {
        localStorage.setItem('achievements', JSON.stringify(achievementsList));
    });
}
