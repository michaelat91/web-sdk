<script lang="ts" module>
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventWin =
		| { type: 'winShow' }
		| { type: 'winHide' }
		| { type: 'winUpdate'; amount: number; winLevelData: WinLevelData };
</script>

<script lang="ts">
	import { Container, Text } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { waitForResolve } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';

	import PressToContinue from './PressToContinue.svelte';
	import { getContext } from '../game/context';

	const context = getContext();

	let show = $state(false);
	let amount = $state(0);
	let winLevelData = $state<WinLevelData>();
	let oncomplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		winShow: () => (show = true),
		winHide: () => (show = false),
		winUpdate: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show}>
	{#if winLevelData}
		<CanvasSizeRectangle backgroundColor={0x000000} backgroundAlpha={0.5} />
		<MainContainer>
			<Container
				x={context.stateGameDerived.boardLayout().x}
				y={context.stateGameDerived.boardLayout().y}
			>
				<Text
					anchor={0.5}
					text={bookEventAmountToCurrencyString(amount)}
					style={{
						fill: 0xffffff,
						fontFamily: 'proxima-nova',
						fontSize: 72,
						fontWeight: '600',
					}}
				/>
			</Container>
		</MainContainer>
		<PressToContinue onpress={() => oncomplete()} />
	{/if}
</FadeContainer>
