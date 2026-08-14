<script lang="ts">
	import { Sprite } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';

	const context = getContext();
	const backgroundProps = $derived(
		context.stateLayoutDerived.normalBackgroundLayout({ scale: 0.5 }),
	);
	const showBaseBackground = $derived(context.stateGame.gameType === 'basegame');
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame');

	const bgBaseUrl = new URL('../../assets/sprites/background/bg_base.png', import.meta.url).href;
	const bgFreespinUrl = new URL('../../assets/sprites/background/bg_freespin.png', import.meta.url).href;
</script>

<FadeContainer show={showBaseBackground} duration={SECOND} zIndex={-2}>
	<Sprite image={bgBaseUrl} {...backgroundProps} />
</FadeContainer>

<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-1}>
	<Sprite image={bgFreespinUrl} {...backgroundProps} />
</FadeContainer>
