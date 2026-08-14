<script lang="ts">
	import { onMount } from 'svelte';

	import type { Reel } from '../game/stateGame.svelte';

	type Props = {
		reel: Reel;
		oncomplete: () => void;
	};

	const props: Props = $props();
	onMount(() => props.oncomplete());
</script>
