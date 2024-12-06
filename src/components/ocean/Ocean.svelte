
<script lang='ts'>
    import { main } from './script/main';
    import { onMount } from 'svelte';

    export const ssr = false;

    onMount(() => {
        import('three').then(three => {
            main();
        });
    })
</script>
  
<canvas id="scene"></canvas>
