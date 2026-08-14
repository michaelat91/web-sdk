<script lang="ts" module>
	export type EmitterEventTransition = { type: 'transition' };
</script>

<script lang="ts">
	import { getContext } from '../game/context';

	const context = getContext();

	// Keep the event contract, but do not render an animation without its asset.
	context.eventEmitter.subscribeOnMount({ transition: async () => {} });
</script>
