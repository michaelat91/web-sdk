<script lang="ts">
	import { Container, Text } from 'pixi-svelte';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';

	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	let completed = false;

	$effect(() => {
		if (context.stateApp.loaded && !completed) {
			completed = true;
			props.onloaded();
		}
	});
</script>

<MainContainer>
	<Container
		x={context.stateLayoutDerived.mainLayout().width * 0.5}
		y={context.stateLayoutDerived.mainLayout().height * 0.5}
	>
		<Text
			anchor={0.5}
			text="LOADING..."
			style={{ fill: 0xffffff, fontFamily: 'proxima-nova', fontSize: 32, fontWeight: '600' }}
		/>
	</Container>
</MainContainer>
