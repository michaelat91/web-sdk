<script lang="ts">
	import { onMount } from 'svelte';

	type Props = {
		oncomplete: () => void;
	};

	const props: Props = $props();
	onMount(() => props.oncomplete());
</script>
