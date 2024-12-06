import { writable } from 'svelte/store';
import rawAchievements from '$lib/achievements.json';

export const achievements = writable(rawAchievements);
